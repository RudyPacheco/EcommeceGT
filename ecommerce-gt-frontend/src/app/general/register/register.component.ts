import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { usuario } from 'src/app/models/usuario';
import { registerService } from 'src/app/services/register.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private router:Router,private registerService:registerService) {}

  
  cui!: number;
  nombre:string="";
  apellido:string="";
  password: string="";


  registrarUser(){
    console.log(this.cui)
    console.log(this.nombre)
    console.log(this.apellido)
    console.log(this.password)


     this.registerService.registrarUsuario(new usuario(this.cui,this.nombre,this.apellido,this.password,1,0)).subscribe((created)=>{
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
