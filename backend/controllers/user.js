// c'est Ici que vas etre executer toutes les commandes pour ma routes
const bcrypt = require("bcrypt"); // bcrypt pour hashage des mots de passe
const jswtoken = require("jsonwebtoken");
const dbConnection = require("../database/mysql.db");
// FONCTION POUT L'inscription
exports.inscription = (req, res) => {
  // je recupere les email et le pass du body dans des const
  const { nom, prenom, email, password } = req.body;
  console.log(`====== ici le REQ nom ${req.body.nom}`);
  console.log(`====== ici le REQ prenom ${req.body.prenom}`);
  console.log(`====== ici le REQ email ${req.body.email}`);
  console.log(`====== ici le REQ pass ${req.body.password}`);

  console.log(` ICI ====> LE REQ.BODY ${req}`);
  // hachage du Mdp
  bcrypt
    .hash(password, 10) // hashage 10
    .then((hash) => {
      console.log(`==================> HASH ${hash}`);
      const user = {
        nom: nom,
        prenom: prenom,
        email: email,
        password: hash,
      };
      console.log(`====> ICI le USER ===> ${user.password}`);

      dbConnection.query(
        "INSERT INTO utilisateur SET ?",
        user,
        (err, res, fields) => {
          if (err) {
            console.log(err);
            res.json(` il y'a une erreur ${err}`);
          } else {
            console.log(res);
          }
        }
      );
    })
    .then(() => res.status(201).json({ message: "Profil Crèe !" })) // la response si tout vas bien
    .catch((err) => res.status(500).json({ err })); //la reponse si tout vas mal
};

// // !CREE UN USER sa va le FAIRE
// // si req par page web = get sinon =post
// // FONCTION POUR CONEXION
// exports.login = (req, res, next) => {
//   userModel.findOne({ email: req.body.email })// je recherche le mail entrer dans la Bd
//     .then((utilisateur) => {// celui ci sera dans une reponse "utilisateur"
//       if (!utilisateur) { // si selui ci est fals  retourn
//         return res.status(401).json({ error: 'utilisateur introuvable' })
//       }
//       // verification du password
//       bcrypt.compare(req.body.password, utilisateur.password)

//         .then((reponseVerif) => {
//           console.log(reponseVerif)

//           if (!reponseVerif) {
//             return res.status(401).json({ error: 'Le password est incorect' })
//           }

//           res.status(200).json({
//             // mise en place du token pour le suivie de qui peut faire, le userId et le token seron liee
//             userId: utilisateur._id,
//             token: jswtoken.sign(
//               { userId: utilisateur._id }, // userID prend le ID de l'user
//               process.env.TOKEN_CODE,
//               { expiresIn: "24h" }
//             )
//           })

//         })
//         .catch((error) => { res.status(500).json({ error }) })
//     })
//     .catch((err) => { res.status(500).json({ err }) })
// }
