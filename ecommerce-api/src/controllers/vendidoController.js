const prodVendido = require('../models/producto_ventido')


const saveProductoVendido =async (req, res) => {
    const productoInsert = new prodVendido({
        titulo_producto:req.body.titulo_producto,
        descripcion:req.body.descripcion,
        categoria:req.body.categoria,
        cantidad:req.body.cantidad,
        precio:req.body.precio,
        ganancia_vendedor:req.body.ganancia_vendedor,
        ganancia_sistema:req.body.ganancia_sistema,
        cui_vendedor:req.body.cui_vendedor,
        cui_comprador:req.body.cui_comprador,
        fecha_compra:req.body.fecha_compra,
        fecha_entrega:req.body.fecha_entrega,

  
    })
    const newProducto = await productoInsert.save();
    res.json(newProducto)
  }


  const listarVendidos = async(req,res) =>{
    const lista = await prodVendido.find({cui_vendedor:req.body.cui})
    res.json(lista)
}

  const listaCompras = async(req,res) =>{
    const lista = await prodVendido.find({cui_comprador:req.body.cui})
    res.json(lista)
  }


  const getProductoMasVendido = async (req,res)=>{
    const fechaI = new Date(req.query.fechaI);
    const fechaF = new Date(req.query.fechaF);
    const venta = await prodVendido.aggregate([{$match:{fecha_compra:{$gte: fechaI,$lt: fechaF}}},
    {$group:{_id:{titulo_producto:"$titulo_producto",precio:"$precio",cui_vendedor:"$cui_vendedor"},cantidad:{$sum:"$cantidad"}}},
    {$project:{_id:0,titulo_producto:"$_id.titulo_producto",precio:"$_id.precio",cui_vendedor:"$_id.cui_vendedor",cantidad:1}},
    {$sort:{cantidad:-1}},{$limit:10}])
        res.json(venta)

  }

  const getClienteMasVentas = async (req,res)=>{
    const fechaI = new Date(req.query.fechaI);
    const fechaF = new Date(req.query.fechaF);
    const venta = await prodVendido.aggregate([{$match:{fecha_compra:{$gte: fechaI,$lt: fechaF}}},
    {$group:{_id:"$cui_vendedor",cui_vendedor:{$first:"$cui_vendedor"},cantidad:{$sum:"$cantidad"}}},
    {$sort:{cantidad:-1}},{$limit:5}])
        res.json(venta)

  }


  const getClienteMasGanancia = async (req,res)=>{
    const fechaI = new Date(req.query.fechaI);
    const fechaF = new Date(req.query.fechaF);
    const ganancia = await prodVendido.aggregate([{$match:{fecha_compra:{$gte: fechaI,$lt: fechaF}}},
    {$group:{_id:"$cui_comprador",cui_comprador:{$first:"$cui_comprador"},ganancia_sistema:{$sum:"$ganancia_sistema"},ganancia_vendedor:{$sum:"$ganancia_vendedor"},cantidad:{$sum:1}}},
    {$sort:{cantidad:-1}},{$sort:{ganancia_sistema:-1}},{$limit:5}])
        res.json(ganancia)

  }
  
module.exports = {
    saveProductoVendido:saveProductoVendido,
    listarVendidos:listarVendidos,
    listaCompras:listaCompras,
    listarVendidos:listarVendidos,
    getProductoMasVendido:getProductoMasVendido,
    getClienteMasVentas:getClienteMasVentas,
    getClienteMasGanancia:getClienteMasGanancia
}


