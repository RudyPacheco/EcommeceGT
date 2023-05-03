import { Component } from '@angular/core';
import { productoVendido } from 'src/app/models/productoVendido';
import { loginServices } from 'src/app/services/login.service';
import { ventaService } from 'src/app/services/venta.service';

@Component({
  selector: 'app-historial-compra',
  templateUrl: './historial-compra.component.html',
  styleUrls: ['./historial-compra.component.css']
})
export class HistorialCompraComponent {

  productos:productoVendido[]=[]
  totalGastado:number=0;

  constructor(private ventaService:ventaService,private loginService:loginServices){
    this.ventaService.listarComprasUsuario(this.loginService.usuarioLog).subscribe((lista:productoVendido[])=>{
      this.productos=lista;
      for (let index = 0; index < lista.length; index++) {
        const element = lista[index];
       
      this.totalGastado=this.totalGastado+element.precio; 
      }
    })
  }


}
