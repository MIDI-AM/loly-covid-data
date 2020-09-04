const model = require('../models/usuario.model')
const expres = require('express')
const router = expres.Router()

router.get('/usuarios', model.getUsuarios)
router.get('/usuarios/:id', model.getUsuarioByID)
router.post('/usuarios', model.createUsuario)
router.put('/usuarios/:id', model.updateUsuario)
router.delete('/usaurios/:id', model.deleteUsuario)

module.exports = router