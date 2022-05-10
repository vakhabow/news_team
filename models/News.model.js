const mongoose = require("mongoose");
const newsSchema = mongoose.Schema({
  title: String,
  body: String,
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
});

const News = mongoose.model("News", newsSchema);
module.exports = News;
