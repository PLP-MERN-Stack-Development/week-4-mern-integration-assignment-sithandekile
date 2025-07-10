const express = require('express');
const router = express.Router();
const postController = require('../controllers/postsController');
const { postValidation} = require('../middlewares/validationMiddleware');
const protect = require('../middlewares/auth');
const assignAuthor = require('../middlewares/assignAuthor');

router.get('/search', postController.searchPosts);
router.post('/',protect, assignAuthor, postValidation, postController.createPost);
router.get('/', postController.getPosts);
router.get('/:id',protect, postController.getPostId);
router.put('/:id',protect, postValidation, postController.updatingPost);
router.delete('/:id',protect, postController.deletePost);

module.exports = router;
