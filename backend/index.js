require('dotenv').config(); // je requier dotenv (gestion des variables Environement)
const express = require("express"); // je requier expresse et je la lance dans app (pour lancer un serveur
const app = express();

const PORT = process.env.PORT || 3000

app.get('/', function (req, res) {
  res.send('Hello World');
})

app.listen(PORT);