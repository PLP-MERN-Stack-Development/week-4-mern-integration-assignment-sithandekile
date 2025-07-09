const Category = require('../models/Category');
const crudController = require('./crudController');

module.exports = {
  createCategory: crudController.createOne(Category),
  getCategories: crudController.getAll(Category),
  getCategoryById: crudController.getOne(Category),
  updateCategory: crudController.updateOne(Category),
  deleteCategory: crudController.deleteOne(Category)
};
