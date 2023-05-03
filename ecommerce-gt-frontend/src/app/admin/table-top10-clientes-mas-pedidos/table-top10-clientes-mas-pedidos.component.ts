import { Component, ElementRef, ViewChild } from '@angular/core';
import { ventaPendiente } from 'src/app/models/ventaPendiente';
import { loginServices } from 'src/app/services/login.service';
import { productoService } from 'src/app/services/producto.service';
import { ventaService } from 'src/app/services/venta.service';

@Component({
  selector: 'app-table-top10-clientes-mas-pedidos',
  templateUrl: './table-top10-clientes-mas-pedidos.component.html',
  styleUrls: ['./table-top10-clientes-mas-pedidos.component.css']
})
export class TableTop10ClientesMasPedidosComponent {
  productos:ventaPendiente[]=[];

  fechaIncial1=''
  fechaFinalL=''


fechaInicio!:Date
  @ViewChild('fechaInicial') fechaInicial!: ElementRef;


  fechaFin!:Date
  @ViewChild('fechaFinal') fechaFinal!: ElementRef;


 

  constructor(private productoService:productoService,private ventaServices:ventaService,private loginService:loginServices){
   

  

  }


  generarReporte(){

    console.log(this.fechaIncial1)
    console.log(this.fechaFinalL);
 
    this.ventaServices.getReportClienteMasPedidos(this.fechaIncial1,this.fechaFinalL).subscribe((lista:ventaPendiente[])=>{
      this.productos=lista;
      console.log(lista);
    }) 
  }





}
