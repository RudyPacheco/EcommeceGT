import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { categoria } from 'src/app/models/categoria';
import { producto } from 'src/app/models/producto';
import { categoriaService } from 'src/app/services/categoria.service';
import { loginServices } from 'src/app/services/login.service';
import { productoService } from 'src/app/services/producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-agregar',
  templateUrl: './form-agregar.component.html',
  styleUrls: ['./form-agregar.component.css']
})
export class FormAgregarComponent {

  categorias:categoria[]=[];
  file!:File;
  formData!: FormData
  titulo_producto:string="";
  descripcion:string="";
  categoria:string="";
  precio!:number;
  imagen:String="";
  cui_vendedor!:Number;
  aceptado:Boolean=false;
  stock!:number;

  productoSelect:producto;

  constructor(private router:Router,private categoriaService:categoriaService,private productoService:productoService,private loginService:loginServices) {
    this.categoriaService.listarCategorias().subscribe((lista:categoria[])=>{
      this.categorias=lista;
    })


    this.productoSelect=this.productoService.productoSeleccionado;
  }





enviar(){
  console.log(this.productoSelect)
  console.log(this.stock)


  this.productoSelect.stock=this.stock;
  this.productoService.sumarStock(this.productoSelect).subscribe((gen:producto)=>{
    console.log(gen);
    this.popAfirmation();
    this.router.navigate(['misProductos']);
  })
  


}





  public popAfirmation(){
    Swal.fire(
      'Producto Agregado',
    )
  }

}
