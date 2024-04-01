const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    Etat : { type : String , required: true },
    Ref : { type : String , required: true },
    Total : { type : Number , required: true }
}, { timestamps : true })

const OrderModel = new mongoose.model('Order',OrderSchema)

module.exports=OrderModel;