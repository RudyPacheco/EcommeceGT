import { Component } from '@angular/core';
import { producto } from 'src/app/models/producto';
import { loginServices } from 'src/app/services/login.service';
import { productoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-table-top10-clientes-mas-prodventa',
  templateUrl: './table-top10-clientes-mas-prodventa.component.html',
  styleUrls: ['./table-top10-clientes-mas-prodventa.component.css']
})
export class TableTop10ClientesMasProdventaComponent {



  productos:producto[]=[];



  constructor(private productoService:productoService,private loginService:loginServices){
    this.productoService.reportClienteMasProdVenta().subscribe((lista:producto[])=>{
      this.productos=lista
      console.log(lista);
    })

    


  }

}
