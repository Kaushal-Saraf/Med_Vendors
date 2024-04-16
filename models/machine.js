const { default: mongoose, Schema } = require("mongoose");

const machineSchema=new Schema({
    //add before selling a machine
    umid:{
        type:String,
        unique:true
    },
    noofslots:{
        type:Number,
    },
    //add after selling of machine
    ownercontact:{
        type:Number,
    },
    address:{
        type:Object,
    },
    medicines:{
        type:[{
            name:{
                type:String,
            },
            dosage:{
                type:Number,
            },
            cpsuleeachpack:{
                type:Number,
            },
            expiry:{
                type:Date,
            },
            price:{
                type:Number,
            }
        }]
    }
})
export const machine=
 mongoose.models.machine|| mongoose.model("machine",machineSchema)