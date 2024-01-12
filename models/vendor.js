const { default: mongoose, Schema, mongo } = require("mongoose");

const VendorSchema= new Schema({
    mid:{
        type:Number,
        required:true,
        unique:true,
    },
    name:{
        type:String,
    },
    contact:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        requierd:true,
    },
    machinedetails:{
        type:[],
    },
})
export const vendor=
 mongoose.models.vendor|| mongoose.model("vendor",VendorSchema)