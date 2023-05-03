import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { usuario } from 'src/app/models/usuario';
import { loginServices } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar-paqueteria',
  templateUrl: './navbar-paqueteria.component.html',
  styleUrls: ['./navbar-paqueteria.component.css']
})
export class NavbarPaqueteriaComponent {
  usuario:usuario;
  constructor(private router:Router,private loginService:loginServices){
    this.usuario=this.loginService.usuarioLog;
  }






  salir(){

    this.router.navigate(['login']);
  }

}
