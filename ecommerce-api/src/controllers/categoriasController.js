const Categorias = require('../models/categorias');





const listarCategorias = async (req,res)=>{
    console.log(req.body.cui);
    const busqueda = await Categorias.find();   
        console.log(busqueda);
        res.json(busqueda);
    
}


module.exports = {
   
    listarCategorias:listarCategorias
 
}