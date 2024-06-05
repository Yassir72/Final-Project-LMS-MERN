const CartModel = require("../Models/CartSchema");
const mongoose = require('mongoose');
const CourseModel = require('../Models/CourseSchema');

// Helper function to calculate total price
const calculateTotalPrice = async (courseIds) => {
  const courses = await CourseModel.find({ _id: { $in: courseIds } });
  return courses.reduce((total, course) => total + course.Price, 0);
};

const getCartByClientId = async (req, res) => {
    const clientId = req.params.clientId;
  
    if (!mongoose.Types.ObjectId.isValid(clientId)) {
      return res.status(400).json({ message: "Invalid client ID" });
    }
  
    try {
      const cart = await CartModel.findOne({ client: clientId }).populate({
        path: "courses",
        model: "Course",
        select: "Image Title Price"
      });
      if (cart) {
        res.status(200).json(cart);
      } else {
        res.status(404).json({ message: "Cart not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error fetching cart", error });
    }
  };

const getCart = async (req, res) => { console.log( "aaaa",req.params.id);
  const cartId  = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(cartId)) {
    return res.status(400).json({ message: "Invalid cart ID" });
  }

  try {
    const cart = await CartModel.findById(cartId).populate({
      path: "courses",
      model: "Course",
      select: "Image Title Price"
    });
    if (cart) {
      res.status(200).json(cart);
    } else {
      res.status(404).json({ message: "Cart not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error fetching cart", error });
  }
};

// Controller to add a course to the cart
const addToCart = async (req, res) => { console.log(req.body);
  const { client, courseId } = req.body;

  // if (!mongoose.Types.ObjectId.isValid(client) || !mongoose.Types.ObjectId.isValid(course)) { console.log("aaa");
  //   return res.status(400).json({ message: "Invalid client or course ID" });
  // }

  try {
    let cart = await CartModel.findOne({ client });
    console.log(cart);
    if (!cart) {
      cart = new CartModel({ client, courses: [courseId] });
    } else {
      if (cart.courses.includes(courseId)) {
        return res.status(400).json({ message: "Course already exists in cart!" });
      }
      cart.courses.push(courseId);
    }

    // Update the total price
    cart.totalPrice = await calculateTotalPrice(cart.courses);
    await cart.save();
    return res.status(201).json(cart);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Server Error");
  }
};

// Controller to remove a course from the cart
const removeFromCart = async (req, res) => {
  const { clientId, courseId } = req.params;
  console.log(req.params)

  if (!mongoose.Types.ObjectId.isValid(clientId) || !mongoose.Types.ObjectId.isValid(courseId)) {
    return res.status(400).json({ message: "Invalid client or course ID" });
  }

  try {
    const cart = await CartModel.findOne({ client: clientId });
    if (!cart) {
      return res.status(404).send("Cart not found");
    }
    const courseIndex = cart.courses.indexOf(courseId);
    if (courseIndex === -1) {
      return res.status(404).json({ message: 'Course not found in cart' });
    }
    
    cart.courses.splice(courseIndex, 1);

    // Update the total price
    cart.totalPrice = await calculateTotalPrice(cart.courses);
    await cart.save();
    res.status(200).json(cart);
  } catch (err) {
    console.error(err);
    return res.status(500).send('Server Error');
  }
};

module.exports = { addToCart, removeFromCart, getCart, getCartByClientId};