export class productoVendido{
    titulo_producto:string
    descripcion:string
    categoria:string
    cantidad:number
    precio:number
    ganancia_vendedor:number
    ganancia_sistema:number
    cui_vendedor:number
    cui_comprador:number
    fecha_compra:Date
    fecha_entrega:Date

    constructor(titulo_producto:string,descripcion:string,categoria:string,cantidad:number,precio:number,ganancia_vendedor:number,ganacia_sistema:number,cui_vendedor:number,cui_comprador:number,fecha_compra:Date,fecha_entrega:Date){
        this.titulo_producto=titulo_producto;
        this.descripcion=descripcion;
        this.categoria=categoria;
        this.precio=precio;
        this.cantidad=cantidad;
        this.ganancia_vendedor=ganancia_vendedor;
        this.ganancia_sistema=ganacia_sistema;
        this.cui_vendedor=cui_vendedor;
        this.cui_comprador=cui_comprador;
        this.fecha_compra=fecha_compra;
        this.fecha_entrega=fecha_entrega;
    }    

}