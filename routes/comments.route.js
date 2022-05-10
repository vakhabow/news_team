const { Router } = require("express");
const { commentsController } = require("../controllers/comments.controller");

const router = Router();

router.post("/comments", commentsController.postComment);
router.get("/comments/:id", commentsController.getComment);

module.exports = router;
