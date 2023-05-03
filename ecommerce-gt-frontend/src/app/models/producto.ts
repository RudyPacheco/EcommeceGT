export class producto{
    titulo_producto:string
    descripcion:string
    categoria:string
    precio:number
    stock:number
    imagen:string
    cui_vendedor:number
    aceptado:Boolean

    constructor(titulo_producto:string,descripcion:string,categoria:string,precio:number,stock:number,imagen:string,cui_vendedor:number,aceptado:Boolean){
        this.titulo_producto=titulo_producto;
        this.descripcion=descripcion;
        this.categoria=categoria;
        this.precio=precio;
        this.stock=stock;
        this.imagen = imagen;
        this.cui_vendedor=cui_vendedor;
        this.aceptado=aceptado;

    }    

}