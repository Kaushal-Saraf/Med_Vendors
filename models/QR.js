import { data } from "autoprefixer";

const { default: mongoose, Schema } = require("mongoose");

const qrSchema=new Schema({
    uid:{
        type:String,
        unique: true
    },
    umid:{
        type:String,
    },
    medicinedata:{
        type:[],
    },
    used:{
        type:Boolean,
        default:false
    }
})
export const qr=
 mongoose.models.qr|| mongoose.model("qr",qrSchema)