const Router = require('express').Router();
const { addToCart, removeFromCart, getCart, getCartByClientId } = require("../Controllers/CartController");
const { createPaymentIntent } = require("../Controllers/PaymentController");

Router.get("/getCart/:id", getCart);
Router.post("/addCart", addToCart);
Router.delete("/:clientId/courses/:courseId", removeFromCart);
Router.get("/getCart/client/:clientId", getCartByClientId);

// Payment route
Router.post("/create-payment-intent", createPaymentIntent);

module.exports = Router;
