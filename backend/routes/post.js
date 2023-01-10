// == mes requier ==
// j'appel le router de Express
const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

// requier de mes controler pour les placer en arguments de mes routes
const controllerPost = require("../controllers/post");
const multer = require("../middleware/multer");

console.log("MODULE ROUTE POST.JS");
// ===== Mes Routes User=====
router.post("/", auth, multer, controllerPost.createPost); // envoie et cree un poste
router.get("/", auth, controllerPost.allpost); // recupere tout les poste
// router.get("/:id", auth, controllerPost.singlePost); // recupere 1 poste
router.put("/:id", auth, multer, controllerPost.modifyPost); // modifier un poste
router.delete("/:id", auth, multer, controllerPost.deletPost); // suprimer un poste
router.post("/:id/like", auth, controllerPost.likePost); // envoyer un like

module.exports = router;
