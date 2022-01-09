const Auth = require('../model/authModel')

const updateWishlist = async (req, res) => {
  try {
    const { _id, wishlist } = req.body

    const user = await Auth.findByIdAndUpdate(
      _id,
      { wishlist },
      { returnDocument : 'after'}
    )
    .select(['_id','email','username','cart','wishlist'])

    res.status(200).json({ user })
  } catch (error) {
    console.log(error)
    throw new Error()
  }
}

module.exports.updateWishlist = updateWishlist
