// c'est Ici que vas etre executer toutes les commandes pour ma routes pour Post
const postModel = require("../models/Post");
const fs = require("fs"); // ===> files system

// Cree Post
exports.createPost = (req, res) => {
  const postObject = JSON.parse(req.body.post);
  delete postObject._id;
  delete postObject._userId; // pour la securité on utilise le token

  console.log("req.file...=======>.");
  console.log(req.file);

  const post = new postModel({
    ...postObject,
    userId: req.auth.userId,
    imageUrl: `${req.protocol}://${req.get("host")}/images/${
      req.file.filename
    }`, // protocole + nom d'auth / nom de fichier
  });
  post
    .save()
    .then(() => res.status(201).json({ message: `post bien cree` }))
    .catch((err) =>
      res
        .status(400)
        .json({ message: `erreur sur la creation de post ===> ${err}` })
    );
};

exports.modifyPost = (req, res, next) => {
  const postObject = req.file
    ? {
        ...JSON.parse(req.body.post),
        imageUrl: `${req.protocol}://${req.get("host")}/images/${
          req.file.filename
        }`, // protocole + nom d'auth / nom de fichier
      }
    : { ...req.body };
  postModel
    .updateOne({ _id: req.params.id }, { ...postObject, _id: req.params.id })
    .then(() => res.status(200).json({ message: "Post Modifié" }))
    .catch((err) =>
      res
        .status(400)
        .json({ message: `erreur sur la Modification de post ===> ${err}` })
    );
};

//aficher une post
exports.singlePost = (req, res, next) => {
  postModel
    .findOne({ _id: req.params.id })
    .then((post) => res.status(200).json(post))
    .catch((err) =>
      res
        .status(400)
        .json({ message: `erreur sur la selection d'un post ===> ${err}` })
    );
};

//aficher toutes les post
exports.allpost = (req, res, next) => {
  postModel
    .find()
    .then((post) => res.status(200).json(post))
    .catch((err) =>
      res
        .status(400)
        .json({ message: `erreur sur l'affichage d'une post ===> ${err}` })
    );
};

//on supprime l'image et ensuite l'objet
exports.deletPost = (req, res, next) => {
  postModel
    .findOne({ _id: req.params.id })
    .then((post) => {
      const filename = post.imageUrl.split("/images/")[1];
      fs.unlink(`images/${filename}`, () => {
        postModel
          .deleteOne({ _id: req.params.id })
          .then(() => res.status(200).json({ message: "Post supprimé !" }))
          .catch((err) =>
            res.status(400).json({
              message: `erreur sur la suppression d'une post ===> ${err}`,
            })
          );
      });
    })
    .catch((err) => res.status(500).json({ message: `erreur ${err}` }));
};

exports.likePost = (req, res, next) => {
  switch (
    req.body.like // je recupere le choix de lutilisateur -1, 1 ou 0
  ) {
    //  pour le choix 1
    case 1:
      // je recupere la cle _id et sa valeur pour travailler dessu
      postModel
        .updateOne(
          { _id: req.params.id },
          {
            $inc: { likes: 1 }, // j'incremente ma cle likes de 1
            $push: { usersLiked: req.body.userId }, // je rajoute l'ID de mon utilisateur dans le tableau
          }
        )
        .then(() => {
          res.status(201).json({ message: "Ton avis a été pris en compte!" });
        })
        .catch((err) => {
          res.status(400).json({ err });
        });
      break;

    case 0:
      postModel
        .findOne({ _id: req.params.id }) // je recherche dans la Database la post avec l'ID recuperer dans les parametre de la requette ( dans URL)
        .then((objet) => {
          // une foi trouver je recupere une promise avec tout l'objet

          // je parcour les ID qui sont dans usersLiked
          // si sa match avec le userId de l'actuel utilisateur j'execute le code
          if (objet.usersLiked.find((user) => user === req.body.userId)) {
            postModel
              .updateOne(
                { _id: req.params.id },
                {
                  // mise a jours de la post avec l'ID recuperer dans les parametre
                  $inc: { likes: -1 }, // j'enleve 1 au like
                  $pull: { usersLiked: req.body.userId }, // et j'enleve mon Id de usersLiked
                }
              )
              .then(() => {
                res
                  .status(201)
                  .json({ message: "Ton avis a été pris en compte!" });
              })
              .catch((err) => {
                res.status(400).json({ err });
              });
          }
          if (objet.usersDisliked.find((user) => user === req.body.userId)) {
            postModel
              .updateOne(
                { _id: req.params.id },
                {
                  // mise a jours de la post avec l'ID recuperer dans les parametre
                  $inc: { dislikes: -1 }, // j'enleve 1 au dislike
                  $pull: { usersDisliked: req.body.userId }, // et j'enleve mon Id de usersdisliked
                }
              )
              .then(() => {
                res
                  .status(201)
                  .json({ message: "Ton avis a été pris en compte!" });
              })
              .catch((err) => {
                res.status(400).json({ err });
              });
          }
        })
        .catch((err) => {
          res.status(404).json({ err });
        });
      break;

    case -1:
      // je recupere la cle _id et sa valeur pour travailler dessu
      postModel
        .updateOne(
          { _id: req.params.id },
          {
            $inc: { dislikes: 1 }, // j'incremente ma cle dislikes de 1
            $push: { usersDisliked: req.body.userId }, // je rajoute l'ID de mon utilisateur dans le tableau dislikes
          }
        )
        .then(() => {
          res.status(201).json({ message: "Ton avis a été pris en compte!" });
        })
        .catch((err) => {
          res.status(400).json({ err });
        });
      break;
    default:
      console.err(" ERREUR ");
  }
};
