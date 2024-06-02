const Router= require('express').Router();
const{ addToCart, removeFromCart, getCart }=require("../Controllers/CartController")

Router.get("/getCart/:id",getCart);
Router.post("/addCart",addToCart);
Router.delete("/:clientId/courses/:courseId",removeFromCart);

module.exports=Router;