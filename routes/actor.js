const { Router } = require('express');

const { 
    crearActor, obtenerActores
} = require('../controllers/actor');

const router = Router();

router.get('/obtener-actores', obtenerActores)
router.post('/crear-actor', crearActor)

module.exports = router;