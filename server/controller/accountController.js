// import model
const Auth = require('../model/authModel')

const updateInfo = async (req, res) => {
  try {

    res.status(200).json({ user:existedUser, token})
  } catch (error) {
    console.log(error)
    throw new Error()
  }
}

module.exports.updateInfo = updateInfo