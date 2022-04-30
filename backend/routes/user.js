// !  ici Les rououtes pour l'authantification 
// require express 
const express = require('express');
// require le router
const router = express.Router();

const userController = require('../controllers/user')



router.post('/inscription', userController.inscription);

// la route conection

 module.exports = router