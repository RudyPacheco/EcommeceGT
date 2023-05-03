const express = require('express');

const controllerTarjeta = require('../controllers/tarjetaController')


const router = express.Router();

router.post('/listar',controllerTarjeta.buscarTarjetas);

router.post('/guardar',controllerTarjeta.guardarTarjeta)


 


module.exports = router;