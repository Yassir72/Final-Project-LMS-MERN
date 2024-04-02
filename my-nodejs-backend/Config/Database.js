const mongoose = require("mongoose");
mongoose
  .connect("mongodb+srv://khadijarhaoufal:khadija123@cluster0.8wsab0a.mongodb.net/")
  .then(() => {
    console.log("Connected to database");
  })
  .catch((error) => {
    console.log("Error connecting to database: ", error);
  });