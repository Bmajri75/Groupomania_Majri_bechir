// ici sa arrive de server.js et renvoie au dossier routes ou il y'a les routes >> ensuite sa vas au middleware pour les controles >> controller qui effectue la logique metier
// !   les require
const dotenv = require("dotenv").config();
const express = require("express"); // recupere express
const morgan = require("morgan");
const cors = require("cors");

// !import la conexion a la Base de donnée.
const dbConnection = require("./database/mysql.db");

//! les importation de mes routes
const userRoutes = require("./routes/user");

// !j'appel expresse et je le lance dans app
const app = express();

app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);
// !  pour toutes les Routes
app.use(morgan("dev"));
app.use(express.json()); //Permet d'avoir acces au corp des request meme travail que bodyparser pour toutes mes methode

//! ===== Les routes ====

// routes authantifications
app.use("/api/auth", userRoutes);

module.exports = app;
