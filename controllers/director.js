const { response } = require("express")
const Director = require('../models/director');

const obtenerDirectores = async(req, res = response) => {

    try {

        //traemos todos los hospitales, filtrando al usuario con su nombre e img
        const directorDB = await Director.find({});

        res.status(201).json({
            ok: true,
            directorDB,
        })
        
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error en el Servidor'
        })
    }

}

const crearDirector = async(req, res = response) => {

    try {

        const director = new Director(req.body);

        await director.save()

        res.status(200).json({
            director,
            msg:'Director Creado Correctamente'
        })


    } catch (error) {
        res.status(500).json({msg: 'Error en el servidor'})
    }

}

module.exports = {
    crearDirector,
    obtenerDirectores
}