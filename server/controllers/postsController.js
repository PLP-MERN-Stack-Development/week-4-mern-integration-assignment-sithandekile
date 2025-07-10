const Post = require('../models/Post');
const crudController = require('./crudController');

const createPost = crudController.createOne(Post);
const getPosts = crudController.getAll(Post);
const getPostId = crudController.getOne(Post);
const updatingPost = crudController.updateOne(Post);
const deletePost = crudController.deleteOne(Post);

//adding query search params
const searchPosts = async (req, res) => {
  const query = req.query.q;

  if (!query) {
    return res.status(400).json({ message: 'Search query missing' });
  }

  try {
    const posts = await Post.find({
      $or: [
        { title: { $regex: query, $options: 'i' } },
        { content: { $regex: query, $options: 'i' } },
      ],
    });

    res.json(posts);
  } catch (error) {
    console.error('Search error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  createPost,
  getPosts,
  getPostId,
  updatingPost,
  deletePost,
  searchPosts,  
};
