const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const checkAuth = require('../midleware/check-auth');
const userController = require('../controllers/user');

router.post("/signup", userController.createUser);

router.post("/login", userController.userLogin);

router.delete("/:userId", checkAuth, userController.deleteUser);

module.exports = router;