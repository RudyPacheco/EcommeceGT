import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-paqueteria',
  templateUrl: './home-paqueteria.component.html',
  styleUrls: ['./home-paqueteria.component.css']
})
export class HomePaqueteriaComponent {
  
  constructor(private router:Router){

  }

  irSolicitudes(){
    this.router.navigate(['solicitudes'])
  }

  irSeguimiento(){
    this.router.navigate(['seguimiento'])
  }

}
