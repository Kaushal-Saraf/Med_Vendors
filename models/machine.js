const { default: mongoose, Schema } = require("mongoose");

const machineSchema=new Schema({
    umid:{
        type:String,
        unique:true
    },
    ownercontact:{
        type:Number,
    },
    address:{
        type:Object,
    },
    medicines:{
        type:[]
    }
})
export const machine=
 mongoose.models.machine|| mongoose.model("machine",machineSchema)