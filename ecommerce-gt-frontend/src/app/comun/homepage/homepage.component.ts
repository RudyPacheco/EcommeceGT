import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { categoria } from 'src/app/models/categoria';
import { producto } from 'src/app/models/producto';
import { carritoSercie } from 'src/app/services/carrito.service';
import { categoriaService } from 'src/app/services/categoria.service';
import { loginServices } from 'src/app/services/login.service';
import { productoService } from 'src/app/services/producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  imgagen: string = "";
  productos: producto[] = [];
  categorias:categoria[]=[];
  
  categoria:string="";


  constructor(private loginService: loginServices,private categoriaService:categoriaService, private productoService: productoService,private carritoService:carritoSercie,private router:Router){
  this.categoriaService.listarCategorias().subscribe((rest:categoria[])=>{
    this.categorias=rest;
    console.log(this.categorias)
  })
  
    this.productoService.cargarProductosAceptados(this.loginService.usuarioLog.cui).subscribe((prod: producto[]) => {
      if (this.carritoService.productosCarrito.length>0) {
       for (let index1 = 0; index1 < this.carritoService.productosCarrito.length; index1++) {
        const element1 = this.carritoService.productosCarrito[index1];
        for (let index = 0; index < prod.length; index++) {
          const element2 = prod[index];
          if (element1.cui_vendedor==element2.cui_vendedor && element1.titulo_producto==element2.titulo_producto) {
           if (element2.stock==0) {
            prod.splice(index,1);       
            console.log("quedo en 0")     
           }else{
            element2.stock=(element2.stock-1);
            console.log("restando 1")
           }

          }
        }
       }
      }
   


    for (let index = 0; index < prod.length; index++) {
      const element = prod[index];
      console.log(element.imagen)
      this.productoService.getImgProducto(element.imagen).subscribe((img: Blob) => {
        let reader = new FileReader();
        reader.addEventListener('load', () => {
          element.imagen = reader.result as string;
        }, false);
        if (img) {
          reader.readAsDataURL(img);
        }
      })


      this.productos.push(element);

      //agregar imagen nuevaen blob
    }
  });


}


detalleProducto(index:number){
  console.log(this.productos[index]);
  this.productoService.seleccionarProducto(this.productos[index]);

  this.router.navigate(['detalle']);

}



cargarProd(){
  console.log(this.categoria);
  this.productoService.cargarProductosCategoria(this.loginService.usuarioLog.cui,this.categoria).subscribe((lista:producto[])=>{
    this.productos=lista;
  })
}

cargarTodo(){
  this.categoriaService.listarCategorias().subscribe((rest:categoria[])=>{
    this.categorias=rest;
    console.log(this.categorias)
  })
}



agregarCarrito(index:number){
if (this.productos[index].stock!==0) {
 
  this.carritoService.productosCarrito.push(this.productos[index]);
  
  //this.productos.splice(index,1); 
}else{
  //error comprando produto en 0
  console.log("producto en 0")
  this.popErro();
}

}


ngOnInit(): void {

}

public popErro(){
  Swal.fire(
    'Error',
    'Producto con 0 disponibilidad',
    
  )
}



}
