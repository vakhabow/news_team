const { Router } = require( 'express');
const { userController } = require('../controllers/users.controller');


const router = Router()

router.post("/user", userController.postUser)
router.post("/user", userController.getUser)