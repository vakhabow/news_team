const { Router } = require("express");
const { newsController } = require("../controllers/news.controller");

const router = Router();

router.get("/news", newsController.addNews);
router.post("/news", newsController.getAllNews);

module.exports = router;
