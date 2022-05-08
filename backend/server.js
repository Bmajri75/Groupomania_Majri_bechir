
// !======      Mes require     ====
// importation de de app pour faire fonctionnée le server
const app = require('./app');

app.set('port', process.env.PORT);

// le serveur ecoute le port 
app.listen(process.env.PORT)