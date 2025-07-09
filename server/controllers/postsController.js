const Post = require('../models/Post');
const crudController = require('./crudController');

module.exports = {
  createPost: crudController.createOne(Post),
  getPosts: crudController.getAll(Post),
  getPostId: crudController.getOne(Post),
  updatingPost: crudController.updateOne(Post),
  deletePost: crudController.deleteOne(Post)
};
