const { response } = require("express")
const Actor = require('../models/actor');

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
    crearActor
}