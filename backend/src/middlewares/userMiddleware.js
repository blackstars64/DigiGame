const Joi = require("joi");

const userSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(15).required(),
  email: Joi.string().email().required(),
  password: Joi.string().pattern(/^[a-zA-Z0-9]{4,30}$/),
  idImg: Joi.number().integer().min(0).max(5),
});

const userMiddleware = (req, res, next) => {
  const { username, email, password, idImg } = req.body;
  const { error } = userSchema.validate(
    {
      username,
      email,
      password,
      idImg,
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
