const Joi = require('joi')
const adminValidations = (data) => {
    const adminValidations = Joi.object({
      full_name: Joi.string().min(6).required(),
      phone: Joi.string().min(10).max(14).required(),
      password: Joi.string().min(6).required(),
    
    });
    return adminValidations.validate(data);
  };

  module.exports= {adminValidations}