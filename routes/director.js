const { Router } = require('express');

const { 
    crearDirector
} = require('../controllers/director');

const router = Router();

router.post('/crear-director', crearDirector)

module.exports = router;