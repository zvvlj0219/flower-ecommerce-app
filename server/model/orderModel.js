const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    orderItem: {
      type: Array,
      required: true
    },
    orderDate: {
      type: Date,
      required: true
    }
  }
)

module.exports = mongoose.model("Order", orderSchema)