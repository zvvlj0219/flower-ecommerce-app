const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    countInStock: {
      type: Number,
      required: true,
    },
    imageUrl: {
      type: Array,
      required: true,
    }
  },
  {
    collection:'products',
    timestamps:true
  }
);

module.exports = mongoose.model("Product", productSchema)