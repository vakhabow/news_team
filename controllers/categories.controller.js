const Category = require('../models/Categoty.model');

module.exports.categoryController = {
    createCategory: async (req, res) => {
        try {
            const newsCategory = await Category.create({
                name: req.body.name
            });
            res.json(newsCategory);
        } catch (err) {
            res.json(err)
        }
    },
    getAllCategories: async (req, res) => {
        try {
            const allCategories = await Category.find({});
            res.json(allCategories);
        } catch (err) {
            res.json(err);
        }
    },
    getCategoryById: async (req, res) => {
        try {
            const certainCategory = await Category.findById(req.params.id);
            res.json(certainCategory);
        } catch (err) {
            res.json(err)
        }
    }
}