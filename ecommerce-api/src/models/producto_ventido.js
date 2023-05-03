const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;

/* Producto_vendido
    -Titulo
    -Descripcion
    -Categoria
    -Cantidad
    -Precio
    -Ganancia_vendedor
    -Ganancia_sistema
    -Cui_vendedor || vendedor 
    -Cui_comprador || comprador 
 */

const vendidoSchema = new Schema({
   titulo_producto:String,
   descripcion:String,
   categoria:String,
   cantidad:Number,
   precio:Number,
   ganancia_vendedor:Number,
   ganancia_sistema:Number,
   cui_vendedor:Number,
   cui_comprador:Number,
   fecha_compra:Date,
   fecha_entrega:Date,

},{
   versionKey:false
});


module.exports = mongoose.model('vendidos',vendidoSchema);