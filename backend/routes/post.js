// == mes requier ==
// j'appel le router de Express
const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

// requier de mes controler pour les placer en arguments de mes routes
const controllerPost = require("../controllers/post");
const multer = require("../middleware/multer-config");

// ===== Mes Routes User=====
router.post("/", auth, multer, controllerPost.createPost);
//router.get("/", auth, controllerPost.allpost);
//router.get("/:id", auth, controllerPost.singlePost);
//router.put("/:id", auth, multer, controllerPost.modifyPost);
//router.delete("/:id", auth, controllerPost.deletPost);
router.post("/:id/like", auth, controllerPost.likePost);

module.exports = router;