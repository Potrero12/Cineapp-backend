const mongoose = require('mongoose');

const ActorSchema = mongoose.Schema({

    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    apellido: {
        type: String,
        required: [true, 'El aplleido es obligatorio']
    },
    edad: {
        type: Number,
        required: [true, 'La edad es obligatoria']
    }

})

module.exports = mongoose.model('Actor', ActorSchema)