export class tarjeta{
    nombre_tarjeta:string
    numero_tarjeta:string
    cvv:number
    cui_usuario:number
    expiracion_mes:number
    expiracion_anio:number

    constructor(nombre_tarjeta:string,numero_tarjeta:string,cvv:number,cui_usuario:number,expiracion_mes:number,expiracion_anio:number){
        this.nombre_tarjeta=nombre_tarjeta;
        this.numero_tarjeta=numero_tarjeta;
        this.cvv=cvv;
        this.cui_usuario=cui_usuario;
        this.expiracion_mes=expiracion_mes;
        this.expiracion_anio=expiracion_anio;
    }







}