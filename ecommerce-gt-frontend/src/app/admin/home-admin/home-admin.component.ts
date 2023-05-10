import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent {

constructor(private router:Router){

}


irEmpleados(){
  this.router.navigate(['empleados'])
}


irReportes(){
  this.router.navigate(['reportes'])
}




}
