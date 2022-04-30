// c'est Ici que vas etre executer toutes les commandes pour ma routes 
require('dotenv').config();
const bcrypt = require('bcrypt'); // bcrypt pour hashage des mots de passe
const jswtoken = require('jsonwebtoken');

// importation de la conexion SQL
const dbConnection = require('../database/mysql.db');


// FONCTION POUT L'inscription
exports.inscription = (req, res, next) => {
  // hachage du Mdp 
  bcrypt
    .hash(req.body.password, 10)  // hashage 10
    .then((hash) => {
      console.log(hash)
      const user = {
        nom: req.body.nom,
        email: req.body.email,
        password: hash
      }
dbConnection.query(
  'INSERT INTO utilisateur SET ?', user, (err, res, fields) => {
    if(err){
      console.log(err);
      res.json({err});
    }else {
      console.log(res)
      res.json({message: "USER ENREGISTRER"})
    }

  }
)

    })
    .catch((err) => {
      res.status(500).json({ err });
    })// capture err 500 en cas d'erreur serveur
};
