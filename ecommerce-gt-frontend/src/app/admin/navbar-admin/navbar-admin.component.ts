import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { usuario } from 'src/app/models/usuario';
import { loginServices } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.css']
})
export class NavbarAdminComponent {
  
  usuario:usuario;
  constructor(private router:Router,private loginService:loginServices){
    this.usuario=this.loginService.usuarioLog;
  }



  salir(){

    this.router.navigate(['login']);
  }


}
