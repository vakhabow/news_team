const { Router } = require('express');

const { categoryController } = require('../controllers/Category.controller');

const router = Router();

router.post('/category', categoryController.createCategory);
router.get('/category', categoryController.getAllCategories);
router.get('/category/:id', categoryController.getCategoryById);

module.exports = router;