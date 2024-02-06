const { joi } = require("joi");

const MessageSchema = joi.object({
  title: joi.string().alphanum().min(3).max(30).required(),
  message: joi.string().alphanum().min(15).max(500).required(),
  userId: joi.number().required(),
  received: joi.date().required(),
});

const messageMiddleware = (req, res, next) => {
  const { title, message, userId, received } = req.body;
  const { error } = MessageSchema.validate(
    { title, message, userId, received },
    { abortEarly: false }
  );

  if (error) {
    res.status(400).json({ error: error.details.map((err) => err.message) });
  } else {
    next();
  }
};

module.exports = messageMiddleware;
