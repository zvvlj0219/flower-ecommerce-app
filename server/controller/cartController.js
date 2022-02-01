const Auth = require('../model/authModel')
const Product = require('../model/productModel')
const Order = require('../model/orderModel')

const updateCart = async (req, res) => {
  try {
    const { _id, cart } = req.body

    const user = await Auth.findByIdAndUpdate(
      _id,
      { cart },
      { returnDocument : 'after'}
    )
    .select(['_id','email','username','cart','wishlist','information'])

    res.status(200).json({ user })
  } catch (error) {
    console.log(error)
    throw new Error()
  }
}

const orderConfirm = async (req, res) => {
  try {
    const { _id: userId, cart: prevCart } = req.body

    for (const cartItem of prevCart) {
      const { countInStock } = await Product.findById({ _id: cartItem._id})

      const updatedStock = countInStock - cartItem.qty

      if (updatedStock < 0) {
        throw new Error({ message: 'no exist in stock' })
      }

      await Product.findByIdAndUpdate(
        cartItem._id,
        { countInStock: updatedStock },
        { returnDocument : 'after'}
      )
    }

    const orderHistory = new Order({
      orderItem: prevCart,
      orderDate: new Date()
    })

    const user = await Auth.findByIdAndUpdate(
      userId,
      { 
        cart: [],
        $push: {
          order: orderHistory
        }
      },
      { returnDocument : 'after'}
    )
    .select(['_id','email','username','cart','wishlist','information'])

    res.status(200).json({ user })
  } catch (error) {
    console.log(error)
    throw new Error()
  }
}

module.exports.updateCart = updateCart
module.exports.orderConfirm = orderConfirm
