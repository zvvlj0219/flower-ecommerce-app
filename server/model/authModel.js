const mongoose = require("mongoose");

const authSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    isSignedIn: {
      type: Boolean,
      required: true,
    },
    imagefile: {
      type: String
    },
    cart: {
      type: Array,
      required: true,
    },
    wishlist: {
      type: Array,
      required: true,
    },
  },
  {
    collection:'users',
    timestamps:true
  }
);

module.exports = mongoose.model("Auth", authSchema)