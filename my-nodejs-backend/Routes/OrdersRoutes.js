const Router= require('express').Router();
const{getOrders,getOrderById,addOrder,updateOrder,deleteOrder}=require('../Controllers/OrderController');

Router.get('/getOrders',getOrders);
Router.get('/getOrder/:id',getOrderById)
Router.post('/addOrder',addOrder)
Router.put('/updateOrder/:id',updateOrder);
Router.delete('/deleteOrder/:id',deleteOrder);

module.exports= Router;