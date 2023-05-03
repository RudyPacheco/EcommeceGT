const tarjeta = require('../models/tarjeta');



const guardarTarjeta = async(req,res)=>{
    const insert = new tarjeta({
        nombre_tarjeta:req.body.nombre_tarjeta,
        numero_tarjeta:req.body.numero_tarjeta,
        cvv:req.body.cvv,
        cui_usuario:req.body.cui_usuario,
        expiracion_mes:req.body.expiracion_mes,
        expiracion_anio:req.body.expiracion_anio,

    });
    const saveCard = await insert.save();

    res.json(saveCard);
}


const buscarTarjetas = async (req,res)=>{
    console.log(req.body.cui);
    const busqueda = await tarjeta.find({cui_usuario:req.body.cui});
    if(busqueda == ""){
        res.json();    
    }else{
        console.log(busqueda);
        res.json(busqueda);
        
    }

    
}


module.exports = {
    guardarTarjeta:guardarTarjeta,
    buscarTarjetas:buscarTarjetas,
}