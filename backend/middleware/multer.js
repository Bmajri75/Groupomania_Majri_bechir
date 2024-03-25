const multer = require("multer");
const path = require("path");
const fs = require("fs");

const MIME_TYPES = {
  "image/jpg": "jpg",
  "image/jpeg": "jpg",
  "image/png": "png",
};

const IMAGES_DIR = path.join(__dirname, "..", "images");

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    // Vérifiez si le répertoire d'images existe, créez-le s'il n'existe pas
    if (!fs.existsSync(IMAGES_DIR)) {
      fs.mkdirSync(IMAGES_DIR);
    }

    callback(null, IMAGES_DIR);
  },
  filename: (req, file, callback) => {
    // Vérifiez si le type de fichier est supporté
    if (!(file.mimetype in MIME_TYPES)) {
      return callback(new Error("Unsupported file type"));
    }

    // Nettoyez le nom de fichier en remplaçant tous les caractères non alphanumériques par des tirets
    const name = file.originalname.replace(/[^a-zA-Z0-9]/g, "-");

    // Définissez l'extension en fonction du type de fichier
    const extension = MIME_TYPES[file.mimetype];

    // Définissez le nom de fichier final
    const filename = `${name}-${Date.now()}.${extension}`;

    callback(null, filename);
  },
});

module.exports = multer({ storage }).single("image");
