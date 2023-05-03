export class usuario{
    cui:number;
    nombre:string;
    apellido:string;
    password:string;
    codigo_rol:number;
    salario:number;


    constructor(cui:number,nombre:string,apellido:string,password:string,codigo_rol:number,salario:number){
        this.cui=cui;
        this.nombre=nombre;
        this.apellido=apellido;
        this.password=password;
        this.codigo_rol = codigo_rol;
        this.salario=salario;

    }    

}