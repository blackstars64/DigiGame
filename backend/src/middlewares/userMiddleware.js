const Joi = require("joi");

const userSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().pattern(/^[a-zA-Z0-9]{3,30}$/),
  token: [Joi.string(), Joi.number()],
  description: Joi.string().min(15).max(255),
  registerDate: Joi.date().required(),
  isAdmin: Joi.boolean().required(),
  digiPoint: Joi.number().required(),
});

const userMiddleware = (req, res, next) => {
  const {
    username,
    email,
    password,
    token,
    description,
    registerDate,
    isAdmin,
    digiPoint,
  } = req.body;
  const { error } = userSchema.validate(
    {
      username,
      email,
      password,
      token,
      description,
      registerDate,
      isAdmin,
      digiPoint,
    },
    { abortEarly: false }
  );

  if (error) {
    res.status(400).json({ error: error.details.map((err) => err.message) });
  } else {
    next();
  }
};

module.exports = userMiddleware;