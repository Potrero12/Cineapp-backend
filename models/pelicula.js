const { Schema, model } = require('mongoose');

const PeliculaSchema = Schema({

    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    genero: {
        type: String,
        required: [true, 'El genero es obligatoria']
    },
    duracion: {
        type: String,
        required: [true, 'La duracion es obligatorio']
    },
    actor: {
        type: Schema.Types.ObjectId,
        ref: 'Actor',
        required: true
    },
    director: {
        type: Schema.Types.ObjectId,
        ref: 'Director',
        required: true
    }

})

module.exports = model('Pelicula', PeliculaSchema)