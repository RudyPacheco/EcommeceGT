const express = require('express');
const productoVendidoController = require('../controllers/vendidoController')

const router = express.Router();


router.post('/vendido',productoVendidoController.saveProductoVendido)

router.post('/usuario-comprados',productoVendidoController.listaCompras)

router.post('/usuario-vendidos',productoVendidoController.listarVendidos)

router.get('/producto-mas-vendido',productoVendidoController.getProductoMasVendido)

router.get('/cliente-mas-ventas',productoVendidoController.getClienteMasVentas)

router.get('/cliente-mas-ganancia',productoVendidoController.getClienteMasGanancia);

module.exports = router;