// c'est Ici que vas etre executer toutes les commandes pour ma routes
const bcrypt = require("bcrypt"); // bcrypt pour hashage des mots de passe
const jswtoken = require("jsonwebtoken");
const dbConnection = require("../database/mysql.db");

//requestuier du model
const User = require("../models/User");

// FONCTION POUT L'inscription
exports.inscription = (request, response) => {
  // je recupere les email et le pass du body dans des const
  const { nom, prenom, email, password } = request.body;

  // hachage du Mdp
  bcrypt
    .hash(password, 10) // hashage 10
    .then((hash) => {
      const user = new User(nom, prenom, email, hash);
      // console.log(`====> ICI le USER ===> ${user.password}`);

      dbConnection.query(
        "INSERT INTO utilisateur SET ?",
        user,
        (error, results, fields) => {
          if (error) {
            console.log(error);
            response.json({ error });
          } else {
            console.log(results);
            response.json({ message: "utilisateur Enregistré" });
          }
        }
      );
    });
};

// FONCTION POUR Connexion
//si request par page web = get sinon =post
exports.login = (request, response, next) => {
  const { email, password } = request.body;
  console.log(email, password);

  // recherche de l'User dans la BDD
  //  je me connecte
  dbConnection.query(
    "SELECT * FROM utilisateur WHERE email= ?",
    email,
    (error, results, fields) => {
      if (error) {
        // <= si j'ai une erreur sur la recherche de la BDD
        console.log(error);
        response.json(error); // <= j'envoie lerreur en Json
      } else if (results == 0) {
        // <= si la reponse est negatif c'est que l'User n'existe pas
        return response.status(404).json({ error: "Utilisateur introuvable" });
      } else {
        // <= sinon je controle le PASSWORD
        bcrypt // avec Bcrypt
          .compare(password, results[0].password) // j'utilise la methode compare et j'isole le password entrer par l'User
          .then((reponseVerif) => {
            // cela me renvoie un TRUE OU FALS
            const resultVerisPassword = reponseVerif;
            if (!reponseVerif) {
              // si la reponse de la verification du password est diferente de TRUE
              return response
                .status(401)
                .json({ message: "Le password est incorect" }); // j'annonce que c'est incorect.
            }
            // pour le reste je renvoie l'id et un token avec 24h de dellais
            response.status(201).json({
              userId: results[0].id,
              token: jswtoken.sign(
                { userId: results[0].id },
                process.env.TOKEN_CODE,
                { expiresIn: "24h" }
              ),
              email: email,
              password: resultVerisPassword,
            });
            response.json();
          });
      }
    }
  );
};
