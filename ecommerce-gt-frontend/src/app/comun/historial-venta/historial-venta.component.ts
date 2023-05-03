import { Component } from '@angular/core';
import { productoVendido } from 'src/app/models/productoVendido';
import { loginServices } from 'src/app/services/login.service';
import { ventaService } from 'src/app/services/venta.service';

@Component({
  selector: 'app-historial-venta',
  templateUrl: './historial-venta.component.html',
  styleUrls: ['./historial-venta.component.css']
})
export class HistorialVentaComponent {

  productos:productoVendido[]=[]
  totalGanancia:number=0;

  constructor(private ventaService:ventaService,private loginService:loginServices){
    this.ventaService.listarVentasUsuario(this.loginService.usuarioLog).subscribe((lista:productoVendido[])=>{
      this.productos=lista;
      for (let index = 0; index < lista.length; index++) {
        const element = lista[index];
        this.totalGanancia=this.totalGanancia+element.ganancia_vendedor;
        
      }
    })
  }




}
