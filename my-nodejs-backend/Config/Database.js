const mongoose = require("mongoose");
mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((error) => {
    console.log("Error connecting to database: ", error);
  });