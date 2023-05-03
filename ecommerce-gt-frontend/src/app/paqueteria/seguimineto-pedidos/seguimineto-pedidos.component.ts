import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ventaPendiente } from 'src/app/models/ventaPendiente';
import { ventaService } from 'src/app/services/venta.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-seguimineto-pedidos',
  templateUrl: './seguimineto-pedidos.component.html',
  styleUrls: ['./seguimineto-pedidos.component.css']
})
export class SeguiminetoPedidosComponent {

  pendientes:ventaPendiente[]=[]


  constructor(private ventaService:ventaService,private router:Router){
    this.ventaService.listarPendientes().subscribe((gen:ventaPendiente[])=>{
      this.pendientes=gen;
      console.log(gen)
    })
  }




  entregar(index:number){
this.ventaService.entrgarVenta(this.pendientes[index]).subscribe((gen:ventaPendiente)=>{
  if (gen!==null) {
    this.popAfirmation();
    this.router.navigate(["/homePaquete"])
  }
})
  }

  public popAfirmation(){
    Swal.fire(
      'Pedido Entregado',
    )
  }


} 
