const multer = require("multer"); // je requier multer

// dictionnaire
const MIME_TYPES = {
  "image/jpg": "jpg",
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/gif": "gif",
};

const storage = multer.diskStorage({
  // function pour la destination ou enregistrer le fichier
  destination: (req, file, callback) => {
    callback(null, "images");
  },

  // fonction pour configurer le nom du fichier
  filename: (req, file, callback) => {
    const name = file.originalname.split(" ").join("_");
    // gestion des nom de fichier
    const extension = MIME_TYPES[file.mimetype];

    callback(null, `${name}${Date.now()}.${extension}`); // nom + timestamp + extention
  },
});

module.exports = multer({ storage }).single("image");
