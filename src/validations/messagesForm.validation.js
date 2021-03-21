const Joi = require('joi');

const sendMessageForm = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    subject: Joi.string().required(),
    message: Joi.string().required(),
  }),
};

module.exports = {
  sendMessageForm,
};
