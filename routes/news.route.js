const { Router } = require("express");
const { newsContrl } = require("../controllers/news.controller");

const router = Router();

router.post("/news", newsContrl.addNews);
router.get("/news", newsContrl.getAllNews);

module.exports = router;
