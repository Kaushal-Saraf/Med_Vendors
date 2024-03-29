const { Schema, default: mongoose } = require("mongoose");

const PrescriptionSchema = new Schema({
    aadharnumber:{
        type:Number,
        required:true,
    },
    patientname:{
        type:String,
        required:true,
    },
    patientcontact:{
        type:Number,
        required:true,
    },
    doctorcontact:{
        type:Number,
        required:true,
    },
    doctorname:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true,
    },
    age:{
        type:String,
        required:true,
    },
    gender:{
        type:String,
        required:true
    },
    height:{
        type:Number,
    },
    weight:{
        type:Number,
    },
    bloodpressure: {
        type:String,
    },
    bloodgroup: {
        type:String,
    },
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
    },
    medicines:{
        type:Array,
    },
    tests:{
        type:Array,
    },
    injections:{
        type:Array,
    },
    advice:{
        type:String,
    },
})
export const prescription = 
    mongoose.models.prescription||mongoose.model("prescription",PrescriptionSchema)