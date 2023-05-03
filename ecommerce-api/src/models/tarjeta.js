const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;

/* 
Tarjeta 
    -nombre_tarjeta
    -numero
    -cvv
    -fecha_exp
        mes
        año
    -cui_usuario */


const tarjetaSchema = new Schema({
   nombre_tarjeta:String,
   numero_tarjeta:String,
   cvv:Number,
   cui_usuario:Number,
   expiracion_mes:Number,
   expiracion_anio:Number,
},{
   versionKey:false
});


module.exports = mongoose.model('tarjetas',tarjetaSchema);