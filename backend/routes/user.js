// Mes Routes
// !  MES REQUIRE
const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");

// routes inscription
router.post("/inscription", userController.inscription);

module.exports = router;
