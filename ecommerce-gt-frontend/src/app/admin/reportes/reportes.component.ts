import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent {


  constructor(private router:Router){

  }



reporteClienteMasProdVenta(){
this.router.navigate(['clientesMasProdVenta']);
}


reporteClienteMasPedido(){
  this.router.navigate(['clienteMasPedido']);
  }




  reporteProdMasVendido(){
    this.router.navigate(['prodMasVendido']);
    }


    reporteClienteMasVentas(){
      this.router.navigate(['clienteMasVentas']);
      }

      
      reporteClienteMasGanancia(){
        this.router.navigate(['clienteMasGanancia']);
        }
  

  }
