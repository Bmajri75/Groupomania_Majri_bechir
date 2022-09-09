// requier de mongoose pour gerer les envois à la BD
const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator"); // permet de ne pas enregistrer 2 fois un email

// shema utilisateur
const UserSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

UserSchema.plugin(uniqueValidator);

module.exports = mongoose.model("user", UserSchema);
