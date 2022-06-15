const { response } = require("express")
const Director = require('../models/director');

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
    crearDirector
}