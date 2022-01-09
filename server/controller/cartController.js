const Auth = require('../model/authModel')

const updateCart = async (req, res) => {
  try {
    const { _id, cart } = req.body

    const user = await Auth.findByIdAndUpdate(
      _id,
      { cart },
      { returnDocument : 'after'}
    )
    .select(['_id','email','username','cart','wishlist'])

    res.status(200).json({ user })
  } catch (error) {
    console.log(error)
    throw new Error()
  }
}

module.exports.updateCart = updateCart