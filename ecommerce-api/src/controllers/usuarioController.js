const Usuario = require('../models/usuario');


const insercionUsuario = async (req,res) =>{
    console.log(req.body)
    const insert = new Usuario({
        cui:req.body.cui,
        nombre:req.body.nombre,
        apellido:req.body.apelldio,
        password:req.body.password,
        codigo_rol:req.body.codigo_rol,
        salario:req.body.salario
    });

    const insertUser = await insert.save();
    
    console.log("guardando")
    res.json(insertUser);
}


 async function insertUsuario(body){
    const insert = new Usuario({
        cui:body.cui,
        nombre:body.nombre,
        apellido:body.apellido,
        password:body.password,
        codigo_rol:body.codigo_rol,
        salario:body.salario
    });

    const insertUser = await insert.save();

    return insertUser;
} 

/* async function buscarUsuario(cui){
    const user = await Usuario.find({cui:req.body.cui});
    
} */

//funcion para registar usuario nuevo validando usuario exitente
const registrarUsuario = async(req,res)=>{
    const busqueda = await Usuario.find({cui:req.body.cui});
    if(busqueda == ""){
       // res.json("No encontado");
       console.log("llegando aqui");
      const resultado = await insertUsuario(req.body);
        console.log(resultado);
       res.json(resultado);
       
    }else{
        console.log(busqueda);
        res.json("Usuario Existente");
    }

}


const iniciarSesion = async(req,res)=>{
    const busqueda = await Usuario.findOne({cui:req.body.cui});
    if (busqueda ==null || busqueda == undefined) {
        console.log("vacio")
        console.log("CUI incorrecto")
        res.json("Usuario inexistente")
    }else{

        console.log(busqueda);
        console.log(busqueda.password)
        console.log("-----")
        console.log(JSON.stringify(busqueda));
        console.log(JSON.stringify(busqueda,["password"]));
    


        console.log(busqueda[2])
        console.log(typeof busqueda);
        console.log(req.body.password)
        if (busqueda.password == req.body.password) {
           res.send(busqueda);
        }else{
            console.log("contra incorrecta")
            res.json("Contraseña Incorrecta")
        }
    }
  
  /*   if(busqueda == ""){
        // res.json("No encontado");
    
     }else{
       
     }

 */

    

}

const lisatarEmpleados = async (req,res)=>{
    const busqueda = await Usuario.find({codigo_rol:{$ne:1}});
    res.json(busqueda);
}

const buscarUsuario = async (req,res)=>{
    console.log(req.body.cui);
    const busqueda = await Usuario.find({cui:req.body.cui});
    if(busqueda == ""){
        res.json("No encontado");    
    }else{
        console.log(busqueda);
        res.json(busqueda);
        
    }

    
}


module.exports = {
    insercionUsuario: insercionUsuario,
    buscarUsuario: buscarUsuario,
    registrarUsuario:registrarUsuario,
    iniciarSesion:iniciarSesion,
    lisatarEmpleados:lisatarEmpleados,
}