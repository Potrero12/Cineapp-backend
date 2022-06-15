require('dotenv').config();
const Server = require("./models/server");

//instancia de nustro servidor
const server = new Server();

//levantamos el servidor
server.listen();