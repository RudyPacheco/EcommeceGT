 const mongoose = require('mongoose');
 const Schema = mongoose.Schema;
const model = mongoose.model;
 


 const usuarioSchema = new Schema({
    cui:Number,
    nombre:String,
    apellido:String,
    password:String,
    codigo_rol:Number,
    salario:Number,
},{
    versionKey:false
});
 
//module.exports = model('usuario',usuarioSchema);

/* const userSchema  = mongoose.Schema({
    cui:{type:Number,
        require:true
    },
    nombre:{
        type:String,
        require:true
    
    },
    apellido:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    codigo_rol:{
        type:Number,
        require:true
    },
    salario:{
        type:Number,
        require:true
    },
},{
    versionKey:false
}) 
 */

module.exports = mongoose.model('usuario',usuarioSchema);