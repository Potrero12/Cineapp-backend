const { Router } = require('express');

const { 
    crearDirector, 
    obtenerDirectores
} = require('../controllers/director');

const router = Router();

router.get('/obtener-directores', obtenerDirectores)
router.post('/crear-director', crearDirector)

module.exports = router;