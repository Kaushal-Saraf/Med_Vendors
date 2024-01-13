const { default: mongoose, Schema } = require("mongoose");

const qrSchema=new Schema({
    uid:string,
})
export const qr=
 mongoose.models.qr|| mongoose.model("qr",qrSchema)