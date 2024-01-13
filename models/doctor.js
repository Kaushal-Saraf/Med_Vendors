const { default: mongoose, Schema } = require("mongoose");
const DoctorSchema = new Schema({
    firstname: {
        type:String,
        required:[true,"Name Required"], 
    },
    lastname:{
        type:String,
    },
    contact:{
        type:number,
        required:[true]
    },
    //implement left part ,i.e., upload documents
})
export const doctor=
 mongoose.models.doctor|| mongoose.model("doctor",DoctorSchema)