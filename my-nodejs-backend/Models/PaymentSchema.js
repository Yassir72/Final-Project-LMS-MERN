const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
    Etat : { type : String , required: true },
    cmd_Ref : { type : String , required: true },
    Method : { type : String , required: true },
    Total : { type : Number , required: true }
}, { timestamps : true })

const PaymentModel = new mongoose.model('Payment',PaymentSchema)

module.exports=PaymentModel;