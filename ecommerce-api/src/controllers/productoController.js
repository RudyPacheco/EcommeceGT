const multer = require('multer');
const path = require('path');
const Producto = require('../models/productos')
const mongoose = require('mongoose');


const saveProducto =async (req, res) => {
  const productoInsert = new Producto({
      titulo_producto:req.body.titulo_producto,
      descripcion:req.body.descripcion,
      categoria:req.body.categoria,
      precio:req.body.precio,
      stock:req.body.stock,
      imagen:req.body.imagen,
      cui_vendedor:req.body.cui_vendedor,
      aceptado:req.body.aceptado

  })
  const newProducto = await productoInsert.save();
  res.json(newProducto)
}


const listarProdAceptado = async(req,res)=>{
  const registros = await Producto.find({cui_vendedor:{$ne:req.query.cui},aceptado:true,stock:{$gt:0}});
  res.json(registros);

}

const listarProductoPublicado = async(req,res)=>{
  const registros = await Producto.find({cui_vendedor:req.query.cui,aceptado:true});
  res.json(registros);

} 


const listarProductoSolicitud = async(req,res)=>{
  const registros = await Producto.find({cui_vendedor:req.query.cui,aceptado:false});
  res.json(registros);

} 


const listarProdSolicitud = async(req,res)=>{
  const registros = await Producto.find({aceptado:false});
  res.json(registros);

}


const aceptarProd = async(req,res)=>{
  const registros = await Producto.findByIdAndUpdate(req.body._id,{aceptado:true});
  res.json(registros);

}






const actualizarStock = async(req,res)=>{
  console.log(req.body)
  
  const producto = await Producto.findById(req.body._id);
  console.log("-------------")
  console.log(producto)
  console.log("---------")
  console.log(producto.stock)
  console.log("---------")
  
    let nuevoTotal = producto.stock-1;


    const updateStock = await Producto.findByIdAndUpdate(req.body._id,{stock:nuevoTotal});
    res.json(updateStock);


}


const listarProdCategoria = async(req,res)=>{
  const registros = await Producto.find({categoria:req.query.categoria,cui_vendedor:{$ne:req.query.cui},stock:{$ne:0},aceptado:false});
  res.json(registros);

}



const getImgProducto = async (req, res) => {
  console.log(req.query.url);
  res.set('Content-Type', 'image/jpg');
  const url = req.query.url
  res.sendFile(__dirname+url);
}


const clieneMasProductoVenta = async (req,res)=>{
  const productos = await Producto.aggregate([{$match:{aceptado:true,stock:{$gt:0}}},
  {$group:{_id:"$cui_vendedor",cui_vendedor:{$first:"$cui_vendedor"},stock:{$sum:1}}},
{$sort:{stock:-1}},{$limit:10}])
  res.json(productos);
}



const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, 'src/controllers/images/img-productos');
    },
    filename: function(req, file, cb) {
      cb(null, file.originalname);
    }
});
  
  const upload = multer({ storage: storage })

  module.exports = {
    upload:upload,
    saveProducto:saveProducto,
    getImgProducto:getImgProducto,
    listarProdAceptado:listarProdAceptado,
    listarProdCategoria:listarProdCategoria,
    actualizarStock:actualizarStock,
    listarProdSolicitud:listarProdSolicitud,
    aceptarProd:aceptarProd,
    listarProductoPublicado:listarProductoPublicado,
    listarProductoSolicitud:listarProductoSolicitud,
    clieneMasProductoVenta:clieneMasProductoVenta,
}