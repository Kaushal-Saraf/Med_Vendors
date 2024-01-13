const { default: mongoose, Schema } = require("mongoose");

const PatientSchema = new Schema({
    aadharnumber:{
        type:Number,
        required:true,
        unique: true
    },
    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
    },
    contact:{
        type:Number,
        required:true
    }
})
export const patient=
 mongoose.models.patient|| mongoose.model("patient",PatientSchema)