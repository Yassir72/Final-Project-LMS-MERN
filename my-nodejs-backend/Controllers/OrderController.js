const OrderModel = require('../Models/OrderSchema');


const getOrders = async (req,res)=>{
    try{
        const orders = await OrderModel.find()
        res.send(orders)
    }catch(err){
        console.error(err);
        return res.send('Error');
    }
}

const getOrderById = async (req, res) => {
    try {
        const orderId = req.params.id;
        const orders = await OrderModel.findById({ id: orderId });
        if (!orders || orders.length === 0) {
            return res.status(404).send("No orders found for the provided id");
        }
        
        res.send(orders);
    } catch (err) {
        console.error(err);
        return res.status(500).send('Server Error');
    }
}


const addOrder = async (req, res) => {
    try {
        const { client, course, orderReference, status, totalAmount } = req.body;

        const existingOrder = await OrderModel.findOne({ orderReference: orderReference });
        if (existingOrder) {
            return res.status(400).send("Order reference already exists!");
        }

        const newOrder = await OrderModel.create({
            client,
            course,
            orderReference,
            status,
            totalAmount
        });

        return res.status(201).json(newOrder);
    } catch (err) {
        console.error(err);
        return res.status(500).send("Server Error");
    }
}


const updateOrder = async (req, res) => {
    try {
        const orderId = req.params.id;
        const { client, course, orderReference, status, totalAmount } = req.body;

        // Find and update the order
        const updatedOrder = await OrderModel.findByIdAndUpdate(orderId, {
            client,
            course,
            orderReference,
            status,
            totalAmount
        }, { new: true });

        // Check if the order exists
        if (!updatedOrder) {
            return res.status(404).send("Order not found");
        }

        // Return the updated order
        res.send(updatedOrder);
    } catch (err) {
        console.error(err);
        return res.status(500).send('Server Error');
    }
}


const deleteOrder = async (req, res) => {
    try {
        const orderId = req.params.id;

        // Find and delete the order
        const deletedOrder = await OrderModel.deleteOne({id:orderId});

        // Check if the order exists
        if (!deletedOrder) {
            return res.status(404).send("Order not found");
        }

        // Return the deleted order
        res.send(deletedOrder);
    } catch (err) {
        console.error(err);
        return res.status(500).send('Server Error');
    }
}

module.exports={getOrders,getOrderById,addOrder,updateOrder,deleteOrder};