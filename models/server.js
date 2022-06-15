// REST Server con clases
const express = require('express');
const cors = require('cors');

const { dbConnection } = require('../db/conecction');

class Server {

    constructor(){

        this.app = express();
        this.port = 3000;
        this.paths = {
            actor: '/api/actor',
            director: '/api/director',
            pelicula: '/api/pelicula'
        }

        //conexion al base de datos
        this.conectarBD();
        
        //middleware
        this.middleware();
        
        //rutas de mi aplicación
        this.routes();
    }

    async conectarBD(){
        // conexion a la base de datos
        await dbConnection()
    }

    middleware(){
        //cros
        this.app.use(cors());

        // parseo y lectura de body
        this.app.use(express.json());
    }

    routes(){
        this.app.use(this.paths.actor, require('../routes/actor'));
        this.app.use(this.paths.director, require('../routes/director'));
        this.app.use(this.paths.pelicula, require('../routes/pelicula'));
    }

    
    listen() {
        this.app.listen(this.port, () => {
            console.log('Server funcionando en el puerto:', this.port);
        });
    }

}

module.exports = Server;