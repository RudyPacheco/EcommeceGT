const ventaPendiente = require('../models/venta_pendiente')




const agregarVentaPendiente = async (req,res)=>{
    const insert = new ventaPendiente({
        cui_comprador:req.body.cui_comprador,
        numero_tarjeta:req.body.numero_tarjeta,
        total_gastado:req.body.total_gastado,
        estado:req.body.estado,
        productos:req.body.productos,
        fecha_compra:req.body.fecha_compra,
        fecha_entrega:req.body.fecha_entrega,


    })

    const inserPendiente = await insert.save();
    res.json(inserPendiente)
}






const actualizarEstado = async (req,res)=>{
    console.log(req)
    const update = await ventaPendiente.updateOne({cui_comprador:req.body.cui_comprador,total_gastado:req.body.total_gastado,productos:req.body.productos},{$set:{estado:"Entregado"}});

    res.json(update);
}


const listarPendientes = async (req,res)=>{
    const lista = await ventaPendiente.find({estado:"En camino"});
    res.json(lista);
}


const clienteMasPedidos = async (req,res)=>{
    const fechaI = new Date(req.query.fechaI);
    const fechaF = new Date(req.query.fechaF);

    const pedidos = await ventaPendiente.aggregate([{$match:{fecha_compra:{$gte:fechaI,$lt:fechaF}}},
    {$group:{_id:"$cui_comprador",cui_comprador:{$first:"$cui_comprador"},estado:{$sum:1}}},
    {$sort:{estado:-1}},{$limit:10}])

    res.json(pedidos);

}

module.exports = {
    agregarVentaPendiente:agregarVentaPendiente,
    actualizarEstado:actualizarEstado,
    listarPendientes:listarPendientes,
    clienteMasPedidos:clienteMasPedidos,
}


