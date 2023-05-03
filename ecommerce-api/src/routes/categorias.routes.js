const express = require('express');

const controllerCategorias = require('../controllers/categoriasController')


const router = express.Router();


router.get('/categorias',controllerCategorias.listarCategorias);


 

/* router.get("/user"),(req,res)=>{
    console.log("llego aqui")
    usuario.find().then((data)=>res.json(data)).catch((error)=>res.json("error user"))
}
 */

module.exports = router;