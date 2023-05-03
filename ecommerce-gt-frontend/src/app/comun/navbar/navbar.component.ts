import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { usuario } from 'src/app/models/usuario';
import { carritoSercie } from 'src/app/services/carrito.service';
import { loginServices } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  usuario:usuario;
  totalProd!:number;

  constructor(private router:Router,private loginService:loginServices,private carritoService:carritoSercie){
    this.usuario=this.loginService.usuarioLog;
    this.totalProd=this.carritoService.productosCarrito.length;

  }



  irCarrito(){
    this.router.navigate(['/carrito']);
  }

  salir(){

    this.router.navigate(['login']);
  }


}
