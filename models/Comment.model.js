const mongoose = require("mongoose");

const commentsSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  text: String,
  news: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "News",
  },
});

const Comment = mongoose.model("Comment", commentsSchema);

module.exports = Comment;
