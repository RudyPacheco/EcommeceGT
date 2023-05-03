import { Component } from '@angular/core';
import { producto } from 'src/app/models/producto';
import { carritoSercie } from 'src/app/services/carrito.service';
import { productoService } from 'src/app/services/producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent {

  productoSel:producto;

  constructor(private productoService:productoService,private carritoService:carritoSercie){
    this.productoSel=this.productoService.productoSeleccionado;
  }



  agregarCarrito(){
    if (this.productoSel.stock!==0) {
     
      this.carritoService.productosCarrito.push(this.productoSel);
      this.productoSel.stock-1;
      
      //this.productos.splice(index,1); 
    }else{
      //error comprando produto en 0
      console.log("producto en 0")
      this.popErro();
    }
    
    }
    
    public popErro(){
      Swal.fire(
        'Error',
        'Producto con 0 disponibilidad',
        
      )
    }
    

}
