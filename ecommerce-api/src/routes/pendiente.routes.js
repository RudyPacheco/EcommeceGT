const express = require('express');
const ventaPendienteController = require('../controllers/ventaPendienteController')

const router = express.Router();

router.get('/listar',ventaPendienteController.listarPendientes)


router.post('/guardar',ventaPendienteController.agregarVentaPendiente)

router.post('/aceptar',ventaPendienteController.actualizarEstado)
router.get('/get-cliente-mas-peticiones',ventaPendienteController.clienteMasPedidos)

module.exports = router;