import mongoose, { connection } from "mongoose"

export const connectDb=async()=>{
    try{
        const {connection} = await mongoose.connect(process.env.MONGO_DB_URL,{
            dbName:"hello"
        })
        console.log("db connected...")
        console.log("Db conected with ", connection.host)
    }
    catch(error){
        console.log("Failed to connect")
        console.log(process.env.MONGO_DB_URL)
        console.log(error)
    }
}