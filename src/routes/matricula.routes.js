const express = require('express')
const router = express.Router()

const matriculaController = require('../controllers/matriculaController')

//Mostrar todos los alumnos (GET)
router.get('/', matriculaController.mostrar)
//Crear alumno (POST)
router.post('/crear', matriculaController.crear)
//Editar alumno (POST)
router.post('/editar', matriculaController.editar)
//Borrar alumno (GET)
router.get('/borrar/:id', matriculaController.borrar)
module.exports = router