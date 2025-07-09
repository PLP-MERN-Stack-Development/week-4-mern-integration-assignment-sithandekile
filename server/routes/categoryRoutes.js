const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');
const { categoryValidation } = require('../middlewares/validationMiddleware');
const protect = require('../middlewares/auth');

// category Routes
router.post('/', protect, categoryValidation, categoryController.createCategory);
router.get('/', categoryController.getCategories);  
router.get('/:id', protect, categoryController.getCategoryById);  
router.put('/:id', protect, categoryValidation, categoryController.updateCategory);
router.delete('/:id', protect, categoryController.deleteCategory); 

module.exports = router;
