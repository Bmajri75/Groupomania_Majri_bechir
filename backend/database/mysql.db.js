require('dotenv').config();// dotenv

const mysql = require('mysql');

const dbConnection = mysql.createConnection({
  host: 'localhost',
  database: 'groupomaniaBase',
  user: 'root',
  password: '123456789',
});


dbConnection.connect((err) => {
  if (err){
    console.log( `Erreur de connexion a la Base de donneea MY SQL ${err.stack}`);
  } else {
    console.log("Connecté à la base de données MySQL!");
    console.log(` connecter a l'ID : ${dbConnection.threadId}`);
  }
});
console.log(dbConnection)


// conection a la base ok 
// voir pourquoi sa na pas marcher 

// j'ai taper la commande ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456789';