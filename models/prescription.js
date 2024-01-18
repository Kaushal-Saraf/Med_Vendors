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
        type:string,
    },
    description:{
        type:string,
    },
    doctor:{
        type:string,
    },
    medicines:{
        type:[]
    },
    tests:{
        type:[]
    }
})
export const prescription = 
    mongoose.model.prescription||mongoose.model("prescription",PrescriptionSchema)