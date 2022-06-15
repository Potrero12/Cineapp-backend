const { response } = require("express")
const Pelicula = require('../models/pelicula.js');

const obtenerPelicula = async(req, res = response) => {

    try {

        //traemos todos los hospitales, filtrando al usuario con su nombre e img
        const peliculaDB = await Pelicula.find({}) 
                                         .populate('actor', 'nombre apellido')
                                         .populate('director', 'nombre apellido');

        res.status(201).json({
            ok: true,
            peliculaDB,
        })
        
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error en el Servidor'
        })
    }

}

const obtenerPeliculaId = async(req, res = response) => {

    const id = req.params.id;

    try {

        //populamos el medico para saber que usuario lo creo y que hospital esta asignado   
        const pelicula = await Pelicula.findById(id)
                                            .populate('actor', 'nombre apellido')
                                            .populate('director', 'nombre apellido');

        res.status(201).json({
            ok: true,
            pelicula
        })
        
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error en el Servidor'
        })
    }

}

const crearPelicula = async(req, res = response) => {

    const { nombre, duracion, genero, director, actor } = req.body;

    try {

        //generar la data
        const datos = {
            nombre,
            duracion,
            genero,
            director,
            actor
        }

        const pelicula = new Pelicula(datos);

        await pelicula.save()

        res.status(200).json({
            pelicula,
            msg:'Director Creado Correctamente'
        })


    } catch (error) {
        res.status(500).json({msg: 'Error en el servidor'})
    }

}

module.exports = {
    obtenerPelicula,
    obtenerPeliculaId,
    crearPelicula
}