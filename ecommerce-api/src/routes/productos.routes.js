const express = require('express')
const ControllerProducto = require('../controllers/productoController')

const router = express.Router();


router.post('/save-product',ControllerProducto.saveProducto)

router.get('/get-img-producto',ControllerProducto.getImgProducto)

router.get('/listar-producto-aceptado',ControllerProducto.listarProdAceptado)
router.get('/listar-producto-solicitud',ControllerProducto.listarProdSolicitud)
router.post('/aceptar',ControllerProducto.aceptarProd)
router.get('/listar-producto-filtrado',ControllerProducto.listarProdAceptado)
router.post('/usuario-producto-solicitud',ControllerProducto.listarProductoSolicitud)
router.post('/usuario-producto-publicado',ControllerProducto.listarProductoPublicado)
router.get('/report-cliente-mas-prod-venta',ControllerProducto.clieneMasProductoVenta)

router.post('/actualizar',ControllerProducto.actualizarStock)

router.post('/save-img-producto', ControllerProducto.upload.single('imagen'), function(req, res) {
    const fileName = req.file.originalname;
    res.json('/images/img-productos/'+fileName);
  });


  

  module.exports = router;