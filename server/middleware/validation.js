const Joi = require('joi')

// signup validation
const registerValidation = formdata =>{
  const signupSchema = Joi.object({
    email:Joi.string()
      .min(6).required().email(),
    username:Joi.string()
      .min(3).required(),
    password:Joi.string()
      .min(6).required(),
    confirmpassword:Joi.string()
      .min(6).required()
  });
  return signupSchema.validate(formdata)
}


// signin validation
const signinValidation = formdata =>{
  const signinSchema = Joi.object({
    email:Joi.string()
      .min(6).required().email(),
    password:Joi.string()
      .min(6).required()
  });
  return signinSchema.validate(formdata)
}

const comparePassword = (password, confirmpassword) => {
  console.log(password !== confirmpassword)
  return password !== confirmpassword
}

module.exports.signinValidation = signinValidation
module.exports.registerValidation = registerValidation
module.exports.comparePassword = comparePassword