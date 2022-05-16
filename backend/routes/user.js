// Mes Routes
// !  MES REQUIRE
const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");

// routes inscription
router.post("/inscription", userController.inscription);
// routes Login
router.post("/login", userController.login);

module.exports = router;
