// ici sa arrive de server.js et renvoie au dossier routes ou il y'a les routes >> ensuite sa vas au middleware pour les controles >> controller qui effectue la logique metier
// !   les require      
const express = require('express');// recupere express
const morgan = require('morgan')
const app = express(); // j'appel expresse et je le lance dans app

//! les importation de mes routes 
const userRoutes = require('./routes/user')

// import la conexion a la Base de donnée.
const dbConnection = require('./database/mysql.db');

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // autorise toutes les requettes d'un autre server
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS'); // Autorise toutes les methodes 
  next();
});

app.use(morgan('dev'));
app.use(express.json()); // meme travail que bodyparser pour toutes mes methode 

//! ===== Les routes ====

app.use('api/auth', userRoutes  );


module.exports = app;