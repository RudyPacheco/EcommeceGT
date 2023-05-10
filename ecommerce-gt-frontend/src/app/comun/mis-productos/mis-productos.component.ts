import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { producto } from 'src/app/models/producto';
import { loginServices } from 'src/app/services/login.service';
import { productoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-mis-productos',
  templateUrl: './mis-productos.component.html',
  styleUrls: ['./mis-productos.component.css']
})
export class MisProductosComponent {

  productosPublicados:producto[]=[];
  productosSolicitados:producto[]=[];


  constructor(private productoService:productoService,private loginService:loginServices,private rotuer:Router){
    this.productoService.usuarioPublicado(this.loginService.usuarioLog).subscribe((lista:producto[])=>{
      this.productosPublicados=lista
    })

    this.productoService.usuarioSolicitudes(this.loginService.usuarioLog).subscribe((lista:producto[])=>{
      this.productosSolicitados=lista
    })


  }


  formulario(index:number){
    this.productoService.seleccionarProducto(this.productosPublicados[index]);
    this.rotuer.navigate(['formAgregar']);

  }
   




}
