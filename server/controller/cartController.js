const Auth = require('../model/authModel')

const updateCart = async (req, res) => {
  try {
    const { userId, cart } = req.body

    const user = await Auth.findByIdAndUpdate(
      userId,
      { cart },
      { returnDocument : 'after'}
    )

    res.status(200).json({ user })
  } catch (error) {
    console.log(error)
    throw new Error()
  }
}

module.exports.updateCart = updateCart