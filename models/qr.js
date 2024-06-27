const { Schema, default: mongoose } = require("mongoose");

const qrSchema=new Schema({
    uid:{
        type:String,
        unique: true
    },
    aadhar:{
        type:Number,
    },
    umid:{
        type:String,
    },
    medicinedata:{
        type:Array,
    },
    used:{
        type:Boolean,
        default:false
    }
})
export const qr=
 mongoose.models.qr|| mongoose.model("qr",qrSchema)
