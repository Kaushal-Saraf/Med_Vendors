const { Schema, default: mongoose } = require("mongoose");

const PrescriptionSchema = new Schema({
    aadharnumber:{
        type:Number,
        required:true,
    },
    doctorcontact:{
        type:Number,
        required:true,
    },
    date:{
        type:Date,
        required:true,
    },
    age:{
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
    }
})
export const prescription = 
    mongoose.model.prescription||mongoose.model("prescription",PrescriptionSchema)