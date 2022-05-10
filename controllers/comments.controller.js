const Comment = require("../models/Comment.model");

module.exports.commentsController = {
  postComment: async (req, res) => {
    try {
      await Comment.create({
        user: req.body.user,
        text: req.body.text,
        news: req.body.news,
      });
      res.json("Комментарий добавлен");
    } catch (error) {
      res.json(error);
    }
  },

  getComment: async (req, res) => {
    try {
      const get = await Comment.find({ news: req.params.id });
      res.json(get);
    } catch (error) {
      res.json(error);
    }
  },
};
