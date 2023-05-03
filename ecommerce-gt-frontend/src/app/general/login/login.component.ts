import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { usuario } from 'src/app/models/usuario';
import { usuarioLogin } from 'src/app/models/usuarioLogin';
import { loginServices } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  constructor(private serviceLogin:loginServices,private router:Router) {}

  cui!: number;
  password: string="";



  login(){
    console.log(this.cui);
    console.log(this.password);

    this.serviceLogin.iniciarSesion(new usuarioLogin(this.cui,this.password)).subscribe((created:usuario)=>{
    

      if (created.codigo_rol== undefined) {
        console.log("manejando error");
        this.popErro();
      }else{
        console.log(Array.isArray(created));
        console.log(typeof created);
        console.log(created);
        console.log(created.codigo_rol);
        this.serviceLogin.usuarioLog=created;
        this.serviceLogin.agregarUsuario(created);
        switch (created.codigo_rol) {
          case 1:
            console.log("redireccionar a 1");
            this.router.navigate(['homepage']);
            break;
          case 2:
            this.router.navigate(['homePaquete']);
            break;
          case 3:
            this.router.navigate(['adminHome']);
            break;
          default:
            break;
        }
      
      }
      


    })


  }



  public popErro(){
    Swal.fire(
      'Error',
      'Usuario o Contraseña incorrecta',
      
    )
  }


}
