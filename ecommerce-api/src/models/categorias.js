const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;



const categoriaSchema = new Schema({
   nombre_categoria:String,
},{
   versionKey:false
});



module.exports = mongoose.model('categorias',categoriaSchema);