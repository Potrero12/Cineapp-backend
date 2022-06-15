const { Router } = require('express');

const { 
    crearActor
} = require('../controllers/actor');

const router = Router();

router.post('/crear-actor', crearActor)

module.exports = router;