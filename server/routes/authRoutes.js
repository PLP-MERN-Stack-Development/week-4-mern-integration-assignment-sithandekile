const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authControler');
const { authValidation } = require('../middlewares/validationMiddleware');

router.post('/register', authValidation, registerUser);
router.post('/login', authValidation, loginUser);

module.exports = router;
