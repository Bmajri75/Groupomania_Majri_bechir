// ici sa arrive de server.js et renvoie au dossier routes ou il y'a les routes >> ensuite sa vas au middleware pour les controles >> controller qui effectue la logique metier
// !   les require      
const express = require('express');// recupere express
const morgan = require('morgan')

const app = express(); // j'appel expresse et je le lance dans app

app.use(morgan('dev'));

app.use((req, res, next) => {
 console.log('salut ici le premier middleware');
 next();
})

app.use((req, res)=> {
  res.json({ message: "on est bon la on est sur nodemon "})
})

module.exports = app;