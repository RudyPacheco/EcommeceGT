import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { producto } from 'src/app/models/producto';
import { productoService } from 'src/app/services/producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-solicitudes-ingreso',
  templateUrl: './solicitudes-ingreso.component.html',
  styleUrls: ['./solicitudes-ingreso.component.css']
})
export class SolicitudesIngresoComponent {
  
  solicitudes:producto[]=[];

  constructor(private productoService:productoService,private router:Router){
    this.productoService.cargarProductosSolicitud().subscribe((lista:producto[])=>{
      this.solicitudes=lista;
    })
  }




  aceptarProducto(index:number){
    this.productoService.aceptarPRoducto(this.solicitudes[index]).subscribe((gen:producto)=>{
      console.log(gen)
      this.popAfirmation();
      this.router.navigate(['homePaquete'])
    })
  }


  public popAfirmation(){
    Swal.fire(
      'Producto Aceptado',
    )
  }




}
