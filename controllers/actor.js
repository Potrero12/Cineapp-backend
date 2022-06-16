const { response } = require("express")
const Actor = require('../models/actor');

const obtenerActores = async(req, res = response) => {

    try {

        //traemos todos los hospitales, filtrando al usuario con su nombre e img
        const actoresDB = await Actor.find({});

        res.status(201).json({
            ok: true,
            actoresDB,
        })
        
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error en el Servidor'
        })
    }

}

const crearActor = async(req, res = response) => {

    try {

        const actor = new Actor(req.body);

        await actor.save()

        res.status(200).json({
            actor,
            msg:'Actor Creado Correctamente'
        })


    } catch (error) {
        res.status(500).json({msg: 'Error en el servidor'})
    }

}

module.exports = {
    obtenerActores,
    crearActor
}