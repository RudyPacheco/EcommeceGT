import { Component } from '@angular/core';
import { productoVendido } from 'src/app/models/productoVendido';
import { loginServices } from 'src/app/services/login.service';
import { productoService } from 'src/app/services/producto.service';
import { ventaService } from 'src/app/services/venta.service';

@Component({
  selector: 'app-table-top-cliente-mas-ganancia',
  templateUrl: './table-top-cliente-mas-ganancia.component.html',
  styleUrls: ['./table-top-cliente-mas-ganancia.component.css']
})
export class TableTopClienteMasGananciaComponent {
  productos:productoVendido[]=[];

  fechaIncial1=''
  fechaFinalL=''




 

  constructor(private productoService:productoService,private ventaServices:ventaService,private loginService:loginServices){
   

  

  }


  generarReporte(){

    console.log(this.fechaIncial1)
    console.log(this.fechaFinalL);
 
    this.ventaServices.reportClinteMasGanancia(this.fechaIncial1,this.fechaFinalL).subscribe((lista:productoVendido[])=>{
      this.productos=lista;
      console.log(lista);
    }) 
  }


}
