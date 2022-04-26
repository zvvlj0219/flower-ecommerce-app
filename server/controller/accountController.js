const { verifyToken } = require('../middleware/verifyToken')

// import model
const Auth = require('../model/authModel')

const editAccount = async (req, res) => {
  try {
    verifyToken()
  
    const { form } = req.body
    const { email, client, address, username, _id } = form
  
    const user = await Auth.findByIdAndUpdate(
      _id,
      {
        email,
        information: {
          client,
          address
        },
        username
      },
      { returnDocument : 'after'}
    )
    .select(['_id','email','username', 'information', 'cart', 'order','wishlist'])

    res.status(200).json({ user })
  } catch (error) {
    console.log(error)
  }
}

module.exports.editAccount = editAccount
