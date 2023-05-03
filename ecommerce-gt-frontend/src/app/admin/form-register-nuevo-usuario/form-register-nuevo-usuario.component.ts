import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { usuario } from 'src/app/models/usuario';
import { registerService } from 'src/app/services/register.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-register-nuevo-usuario',
  templateUrl: './form-register-nuevo-usuario.component.html',
  styleUrls: ['./form-register-nuevo-usuario.component.css']
})
export class FormRegisterNuevoUsuarioComponent {
 
  constructor(private router:Router,private registerService:registerService) {}
  cui!: number;
  nombre:string="";
  apellido:string="";
  password: string="";
  codigo_rol:number=0;
  codigo:number=0;
  salario!:number;
  codigoSucursal:string="";


  cargarValor(){
    this.codigo=5;
    console.log(this.codigo);
  }

  registrarUser(){
    console.log(this.cui)
    console.log(this.nombre)
    console.log(this.apellido)
    console.log(this.password)
    console.log(this.codigo_rol)
    console.log(this.codigoSucursal)


     this.registerService.registrarUsuario(new usuario(this.cui,this.nombre,this.apellido,this.password,this.codigo_rol,this.salario)).subscribe((created)=>{
      if (created.cui==this.cui) {
        console.log("usuario creado");
        this.router.navigate(['login']);
        this.popAfirmation();
      }else{
        console.log("usuario existente");
        this.popErro();
        
      }
    })  
  }


  public popAfirmation(){
    Swal.fire(
      'Cuenta Creada',
    )
  }


  public popErro(){
    Swal.fire(
      'Error',
      'Este CUI ya esta en uso',
      
    )
  }


}
