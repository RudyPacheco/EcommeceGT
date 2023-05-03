const express = require('express');
const usuario = require('../models/usuario');
const controllerUsuario = require('../controllers/usuarioController')


const router = express.Router();

router.post('/user',controllerUsuario.registrarUsuario);


 router.get('/user', async (req,res)=>{
    const users = await usuario.find()
    console.log(users)
   // res.json(users)
    //const users = await usuario.find({});
   res.status(200).send(users);
});


router.get('/getUser',controllerUsuario.buscarUsuario);

router.post('/login',controllerUsuario.iniciarSesion)

router.get('/listar',controllerUsuario.lisatarEmpleados);
 

/* router.get("/user"),(req,res)=>{
    console.log("llego aqui")
    usuario.find().then((data)=>res.json(data)).catch((error)=>res.json("error user"))
}
 */

module.exports = router;