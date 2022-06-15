const mongoose = require('mongoose');

const dbConnection = () => {

    try {
        mongoose.connect(process.env.DB_CONNECTION);
        console.log('Base de datos corriendo correctamente')
    } catch (error) {
        console.log(error)
    }

}

module.exports = {
    dbConnection
}
