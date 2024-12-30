const mongoose = require("mongoose");

const Product = mongoose.Schema({
  name: {
    type: String,
    required: [true, "product name cannot be empty"],
  },
  company: {
    type: String,
    required: [true, "product company cannot be empty"],
    enum: {
      values: ["electronics", "fashion", "home", "kitchen"],
      message: "{VALUE} is not supported",
    },
  },
  price: {
    type: Number,
    required: [true, "product price cannot be empty"],
  },
  rating: {
    type: Number,
    required: [true, "product ratings cannot be empty"],
  },
  featured: {
    type: Boolean,
    required: [true, "product ratings cannot be empty"],
    default: false,
  },
  brand: {
    type: String,
    required: [true, "product ratings cannot be empty"],
  },
  inStock: {
    type: Boolean,
    required: [true, "provide the product stock number"],
  },
});

module.exports = mongoose.model("Product", Product);
