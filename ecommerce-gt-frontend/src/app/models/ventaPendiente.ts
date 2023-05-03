import { producto } from "./producto"

export class ventaPendiente{
    cui_comprador:number
    numero_tarjeta:string
    total_gastado:number
    estado:string
    productos:producto[]
    fecha_compra:Date
    fecha_entrega:Date


    constructor(cui_comprador:number,numero_tarjeta:string,total_gastado:number,estado:string,productos:producto[],fecha_compra:Date,fecha_entrega:Date){
        this.cui_comprador=cui_comprador
        this.numero_tarjeta=numero_tarjeta
        this.total_gastado=total_gastado
        this.estado=estado
        this.productos=productos
        this.fecha_compra=fecha_compra
        this.fecha_entrega=fecha_entrega
    }





}