const { Router } = require('express');

const { crearPelicula, obtenerPelicula, obtenerPeliculaId } = require('../controllers/pelicula');

const router = Router();

router.get('/obtener-peliculas', obtenerPelicula)
router.get('/obtener-peliculas/:id', obtenerPeliculaId)
router.post('/crear-pelicula', crearPelicula)

module.exports = router;