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
    dob:{
        type:Date,
        required:true
    },
    gender:{
        type:String,
        required:true,
    },
    contact:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
export const patient=
 mongoose.models.patient|| mongoose.model("patient",PatientSchema)