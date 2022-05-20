const mysql = require("mysql");

// je crée les parametre de conexion
const dbConnection = mysql.createConnection({
  host: "127.0.0.1",
  user: process.env.DB_ID,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// je me connecte en appelant mes parametre configurer en haut
dbConnection.connect((err) => {
  if (err) {
    // si j'ai une erreur renvoir moi l'erreur
    console.log(`Erreur de connexion a la Base de donneea MY SQL ${err}`);
  } else {
    // sinon informe moi que tout est ok et donne moi l'id de conexion
    console.log("Connecté à la base de données MySQL!");
    console.log(` connecter a l'ID : ${dbConnection.threadId}`);
  }
});

module.exports = dbConnection;
