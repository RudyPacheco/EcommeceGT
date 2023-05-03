const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const usuarioRoutes = require('./routes/usuario.routes');
const categoriaRoutes = require('./routes/categorias.routes');
const productoRoutes = require('./routes/productos.routes');
const tarjetaRoutes = require('./routes/tarjetas.routes');
const pendienteRoutes = require('./routes/pendiente.routes');
const vendidoRoutes = require('./routes/vendido.routes')
const path = require('path');
const app = express();


//const morgan = require('morgan');
//const bodyParse = require('body-parser');
//const bp = require('body-parser')




app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use(cors());


 async function start(){
    try {
        const db = await mongoose.connect('mongodb://localhost:27017/ecommercegt',{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            family:4
        });
        console.log("conectado a la base de datos " ,db.connection.name);
    } catch (error) {
        console.log(error);
    }
}


start(); 

//app.use(bp.json())
//app.use(bp.urlencoded({ extended: true }))

app.use('/api',usuarioRoutes);
app.use('/categ',categoriaRoutes);
app.use('/producto',productoRoutes);
app.use('/tarjeta',tarjetaRoutes);
app.use('/pendiente',pendienteRoutes);
app.use('/venta',vendidoRoutes)



app.listen(3000, ()=>{
    console.log("servidor en el puerto 3000");
});

