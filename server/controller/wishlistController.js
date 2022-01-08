const Auth = require('../model/authModel')

const updateWishlist = async (req, res) => {
  try {
    const { userId, wishlist } = req.body

    const user = await Auth.findByIdAndUpdate(
      userId,
      { wishlist },
      { returnDocument : 'after'}
    )

    res.status(200).json({ user })
  } catch (error) {
    console.log(error)
    throw new Error()
  }
}

module.exports.updateWishlist = updateWishlist
