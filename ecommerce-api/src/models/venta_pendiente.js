const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;

/* Venta_pendiente
    -CUI || comprador
    -total_gastado
    -productos
    -numero_tarjeta
    -estado
    -fecha_compra

 */

const ventaPendienteSchema = new Schema({
   cui_comprador:Number,
   numero_tarjeta:String,
   total_gastado:Number,
   estado:String,
   productos:Array,
   fecha_compra:Date,
   fecha_entrega:Date,
},{
   versionKey:false
});


module.exports = mongoose.model('pendientes',ventaPendienteSchema);