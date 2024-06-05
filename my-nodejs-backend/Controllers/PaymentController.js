require("dotenv").config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY); // Ensure you have this in your .env file
const CartModel = require('../Models/CartSchema');
const mongoose=require('mongoose')

// Create Payment Intent
const createPaymentIntent = async (req, res) => {
  const { clientId } = req.body;

  if (!mongoose.Types.ObjectId.isValid(clientId)) {
    return res.status(400).json({ message: "Invalid client ID" });
  }

  try {
    const cart = await CartModel.findOne({ client: clientId }).populate({
      path: "courses",
      model: "Course",
      select: "Price"
    });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    const amount = cart.totalPrice * 100; // Stripe expects the amount in cents

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
    });

    console.log(paymentIntent)
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = { createPaymentIntent };
