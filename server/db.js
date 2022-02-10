const mongoose = require('mongoose')

module.exports = async () => {
  try {
    const connectionParams = {
      useUnifiedTopology : true,
      useNewUrlParser : true
    }
    await mongoose.connect(
      process.env.MONGODB_URI,
      connectionParams
    )
    console.log('connected mongodb atlas')
  } catch (error) {
    console.log(error)
    throw new Error()
  }
}