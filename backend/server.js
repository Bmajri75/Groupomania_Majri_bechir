// ici pour acceder a l'api ensuite renvoie a app .js

// !======      Mes require     ====
// importation de l'application sur le server
const app = require('./app');
require('dotenv').config();

const http = require('http');

app.set('port', process.env.PORT);

const server = http.createServer(app); // <== a chaque requete reçu par le server (app)mon application sera appeler 

// le serveur ecoute le port 
server.listen(process.env.PORT)