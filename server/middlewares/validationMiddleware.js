const Joi = require('joi');
const mongoose = require('mongoose');

const validateObjectId = (value, helpers) => {
  if (!mongoose.Types.ObjectId.isValid(value)) {
    return helpers.message('Invalid ID format');
  }
  return value;
};

// User validation
const authValidation = (req, res, next) => {
  const schema = Joi.object({
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });

  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  next();
};

// Post validation 
const postValidation = (req, res, next) => {
  const schema = Joi.object({
    title: Joi.string().max(100).required(),
    content: Joi.string().required(),
    featuredImage: Joi.string(),
    excerpt: Joi.string().max(200).allow(''),
     author: Joi.string().custom(validateObjectId),
     category: Joi.string().custom(validateObjectId).required(),
    tags: Joi.array().items(Joi.string()),
    isPublished: Joi.boolean(),
  });

  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  next();
};

// Category validation
const categoryValidation = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().allow(''),
  });

  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  next();
};

module.exports = {
  authValidation,
  postValidation,
  categoryValidation,
};
