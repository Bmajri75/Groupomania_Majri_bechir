const multer = require("multer");
console.log("MODULE MULTER.js");
// dictionnaire
const MIME_TYPES = {
  "image/jpg": "jpg",
  "image/jpeg": "jpg",
  "image/png": "png",
};
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "../images/");
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split(" ").join("_");
    console.log(file);
    // gestion des nom de fichier
    const extension = MIME_TYPES[file.mimetype];
    callback(null, `${name}-${Date.now()}.${extension}`); // nom + timestamp + extension
  },
});

module.exports = multer({ storage }).single("imageUrl");
