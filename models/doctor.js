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
        type:Number,
        required:[true,"contact required"]
    },
    password:{
        type:Number,
        required:true
    },
    supportingdocs:{
        type:String,
        required:true
    }
})
export const doctor=
 mongoose.models.doctor|| mongoose.model("doctor",DoctorSchema)