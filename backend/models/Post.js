// requier de mongoose pour gerer les envoie à la BD
const mongoose = require("mongoose");

// le shema pour envoie en Bd, il sera rempli par le front
const PostShema = mongoose.Schema({
  userId: { type: String, required: true },
  commentaire: { type: String, required: false },
  imageUrl: { type: String, required: false },
  likes: { type: Number, required: false, default: 0 },
  dislikes: { type: Number, required: false, default: 0 },
  usersLiked: { type: [String], required: false },
  usersDisliked: { type: [String], required: false },
});

module.exports = mongoose.model("post", PostShema);
