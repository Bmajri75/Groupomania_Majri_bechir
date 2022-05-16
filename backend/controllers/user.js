// c'est Ici que vas etre executer toutes les commandes pour ma routes
const bcrypt = require("bcrypt"); // bcrypt pour hashage des mots de passe
const jswtoken = require("jsonwebtoken");
const dbConnection = require("../database/mysql.db");

//requier du model
const User = require("../models/User");

// FONCTION POUT L'inscription
exports.inscription = (req, res) => {
  // je recupere les email et le pass du body dans des const
  const { nom, prenom, email, password } = req.body;

  // hachage du Mdp
  bcrypt
    .hash(password, 10) // hashage 10
    .then((hash) => {
      // console.log(`==================> HASH ${hash}`);
      const user = new User(nom, prenom, email, hash);
      // console.log(`====> ICI le USER ===> ${user.password}`);

      dbConnection.query(
        "INSERT INTO utilisateur SET ?",
        user,
        (err, res, fields) => {
          if (err) {
            console.log(err);
            res.json({ message: "il y'a une erreur" });
          } else {
            res.json({ message: "utilisateur inscrit dans la BD" });
          }
        }
      );
    })
    .then(() => res.status(201).json({ message: "Profil Crèe !" })) // la response si tout vas bien
    .catch((err) => res.status(500).json({ err })); //la reponse si tout vas mal
};

// si req par page web = get sinon =post
// ! FONCTION POUR CONEXION
exports.login = (req, res, next) => {
  const { email, password } = req.body;

  dbConnection.query(
    "SELECT * FROM utilisateur WHERE email= ?",
    email,
    (err, result, fields) => {
      if (err) {
        // si j'ai une erreur sur la recherche de la BD
        console.log(err);
        res.json(err);
      } else if (result == 0) {
        // si la reponse est negatif
        // si l'user n'existe pas
        return res.status(404).json({ error: "Utilisateur introuvable" });
      } else {
        //  controle du pass
        // pour tout le reste
        bcrypt
          .compare(req.body.password, result[0].password)
          .then((reponseVerif) => {
            console.log("RESULTAT DE LA VRIF PASSSSSS=====>>>>");
            console.log(reponseVerif);
            // si la reponse de la verification du password est incorect
            if (!reponseVerif) {
              return res
                .status(401)
                .json({ error: "Le password est incorect" });
            }

            console.log("id=====>>>>");
            console.log(result[0].id);
            // si c'est correct

            console.log("TOKENNNNN");

            // renvoie de l'id et du token de la part du serveur
            res.status(201).json({
              userId: result[0].id,
              token: jswtoken.sign(
                { userId: result[0].id },
                process.env.TOKEN_CODE,
                { expiresIn: "24h" }
              ),
            });

            res.json();
          });
        // .catch((err) => res.status(500).json({ err })); //la reponse si tout vas mal;
      }
    }
  );
  // .then(() => res.status(201).json({ message: "Profil Trouvé !" })) // la response si tout vas bien

  //

  //       .catch((error) => {
  //         res.status(500).json({ error });
  //       });
  //   })
  //   .catch((err) => {
  //     res.status(500).json({ err });
  //   });
  // };
};
