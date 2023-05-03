import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { usuario } from 'src/app/models/usuario';
import { empleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-tabla-empleados',
  templateUrl: './tabla-empleados.component.html',
  styleUrls: ['./tabla-empleados.component.css']
})
export class TablaEmpleadosComponent {

  empleados:usuario[]=[]

  constructor(private router:Router,private empleadoService:empleadoService){
    this.empleadoService.listarEmpleados().subscribe((lista:usuario[])=>{
      this.empleados=lista;
    })
  }



  irForm(){
    this.router.navigate(['nuevo'])
  }




}
