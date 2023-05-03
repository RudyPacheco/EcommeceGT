const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;

/* Producto
    -Titulo
    -Descripcion
    -categoria
    -Precio
    -stock
    -imagen
    -cui_vendedor || vendedor  */


const productoSchema = new Schema({
   titulo_producto:String,
   descripcion:String,
   categoria:String,
   precio:Number,
   stock:Number,
   imagen:String,
   cui_vendedor:Number,
   aceptado:Boolean,

},{
   versionKey:false
});


module.exports = mongoose.model('productos',productoSchema);