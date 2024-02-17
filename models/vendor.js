const { default: mongoose, Schema, mongo } = require("mongoose");

const VendorSchema= new Schema({
    mid:{
        type:Number,
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
        type:Array,
    },
})
export const vendor=
 mongoose.models.vendor|| mongoose.model("vendor",VendorSchema)