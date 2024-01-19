const { Schema, default: mongoose } = require("mongoose");

const PrescriptionSchema = new Schema({
    aadharnumber:{
        type:Number,
        required:true,
    },
    height:{
        type:Number,
    },
    weight:{
        type:Number,
    },
    title:{
        type:String,
    },
    description:{
        type:String,
    },
    doctorcontact:{
        type:Number,
    },
    medicines:{
        type:[]
    },
    tests:{
        type:[]
    },
    injections:{
        type:[]
    }
})
export const prescription = 
    mongoose.model.prescription||mongoose.model("prescription",PrescriptionSchema)