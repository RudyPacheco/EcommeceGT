import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { categoria } from 'src/app/models/categoria';
import { producto } from 'src/app/models/producto';
import { categoriaService } from 'src/app/services/categoria.service';
import { loginServices } from 'src/app/services/login.service';
import { productoService } from 'src/app/services/producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-publicar',
  templateUrl: './form-publicar.component.html',
  styleUrls: ['./form-publicar.component.css']
})
export class FormPublicarComponent {

  
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

  constructor(private router:Router,private categoriaService:categoriaService,private productoService:productoService,private loginService:loginServices) {
    this.categoriaService.listarCategorias().subscribe((lista:categoria[])=>{
      this.categorias=lista;
    })

  }





enviar(){
  console.log(this.titulo_producto)
  console.log(this.descripcion)
  console.log(this.categoria)
  console.log(this.precio)
console.log(  this.loginService.usuarioLog.cui)

  

  this.productoService.saveImgProducto(this.formData).subscribe((value:string)=>{
    console.log(value);
    if (value!==undefined && value!== null) {
      this.productoService.saveProducto(new producto(this.titulo_producto,this.descripcion,this.categoria,this.precio,this.stock,value,this.loginService.usuarioLog.cui,false)).subscribe((generado:producto)=>{
        console.log(generado);
        this.popAfirmation();
        this.router.navigate(['homepage'])
      })
    }
    
  })
}



  onFileSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement != null && inputElement.files != null && inputElement.files.length > 0) {
      this.file = inputElement.files[0];
      this.formData  = new FormData();
      this.formData.append('imagen', this.file, this.file.name);
      console.log(this.file);
      console.log(this.formData);
      // Aquí puedes enviar el formulario al servidor utilizando una solicitud HTTP
    }
  }

  public popAfirmation(){
    Swal.fire(
      'Solicitud Enviada',
    )
  }

}
