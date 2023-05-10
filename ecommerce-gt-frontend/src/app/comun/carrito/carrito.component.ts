import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { producto } from 'src/app/models/producto';
import { productoVendido } from 'src/app/models/productoVendido';
import { tarjeta } from 'src/app/models/tarjeta';
import { ventaPendiente } from 'src/app/models/ventaPendiente';
import { carritoSercie } from 'src/app/services/carrito.service';
import { loginServices } from 'src/app/services/login.service';
import { productoService } from 'src/app/services/producto.service';
import { ventaService } from 'src/app/services/venta.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {

  indexTarjeta!:number;
  productosCarrito:producto[];
  tarjetas:tarjeta[]=[];
  total:number=0;

  numeroTarjeta:string="";
  nombreTarjeta:string="";
  fechaExp:string="";
  cvv!:number;
  guardar:boolean=true;
  existente:boolean=false;
  fechaCompra!:Date
  @ViewChild('fechaInput') fechaInput!: ElementRef;



constructor(private carrtioService:carritoSercie,private compraService:ventaService,private loginService:loginServices,private router:Router,private productoService:productoService){
  this.compraService.listarTarjetas(this.loginService.usuarioLog).subscribe((lista:tarjeta[])=>{
    if (lista!==undefined && lista!==null) {
      
    this.tarjetas=lista;
    console.log(this.tarjetas)
    }else{
      console.log("vacia")
    }

  })



  this.productosCarrito=this.carrtioService.productosCarrito;
  for (let index = 0; index < this.productosCarrito.length; index++) {
    const element = this.productosCarrito[index];
    element.imagen="";
    this.total=this.total+element.precio;
    
  }
}


selecTarjeta(){
  console.log(this.indexTarjeta);
  console.log(this.tarjetas[this.indexTarjeta]);
  this.numeroTarjeta=this.tarjetas[this.indexTarjeta].numero_tarjeta;
  this.nombreTarjeta=this.tarjetas[this.indexTarjeta].nombre_tarjeta;
  this.fechaExp=this.tarjetas[this.indexTarjeta].expiracion_mes+"/"+this.tarjetas[this.indexTarjeta].expiracion_anio;
  this.cvv=this.tarjetas[this.indexTarjeta].cvv;
}


limpiar(){
  this.numeroTarjeta="",
  this.nombreTarjeta="",
  this.fechaExp="";
  this.indexTarjeta=100;
  this.existente=false;
  this.indexTarjeta;
}

quitarProd(index:number){
  console.log("eliminando");
  let prod = this.carrtioService.productosCarrito[index];
  this.total=this.total-prod.precio;
  this.carrtioService.productosCarrito.splice(index,1);
  
} 

generarCompra(){
  console.log(this.numeroTarjeta);
  console.log(this.nombreTarjeta);
  console.log(this.fechaExp);
  const xd = this.fechaExp.split('/');
  console.log(xd[0]);
  console.log(xd[1]);
  console.log(this.cvv);
  console.log(this.guardar);
  this.fechaCompra=this.fechaInput.nativeElement.valueAsDate;
  console.log(this.fechaCompra);

/* 
  peticion.fecha_entrega=this.fechaInput.nativeElement.valueAsDate
  peticion.fecha_entrega.setDate(peticion.fecha_venta.getDate()+5) */


  //tarjeta nueva
  if (this.carrtioService.productosCarrito.length>0) {
    for (let index = 0; index < this.tarjetas.length; index++) {
      const element = this.tarjetas[index];
      if (this.numeroTarjeta==element.numero_tarjeta) {
        //venta con tarjeta existente
        console.log("tarjeta buscada")
        console.log(element);

        this.existente=true;
        let xd  =   this.fechaCompra=this.fechaInput.nativeElement.valueAsDate;
        xd.setDate(  this.fechaCompra=this.fechaInput.nativeElement.valueAsDate.getDate()+5)
        this.compraService.guardarPendiente(new ventaPendiente(this.loginService.usuarioLog.cui,element.numero_tarjeta,this.total,"En camino",this.productosCarrito,  this.fechaCompra=this.fechaInput.nativeElement.valueAsDate,xd)).subscribe((res:ventaPendiente)=>{
        
          console.log(res);
          this.actualizarStock();
          this.router.navigate(['homepage'])
          this.carrtioService.productosCarrito=[];
          this.popAfirmation();
        })
        break;
      }
      
    }
    if (this.existente==false) {
      if (this.guardar==true) {
        this.compraService.regsitrarTarjeta(new tarjeta(this.nombreTarjeta,this.numeroTarjeta,this.cvv,this.loginService.usuarioLog.cui,Number(xd[0]),Number(xd[1]))).subscribe((card:tarjeta)=>{
          console.log(card);
          let xd  =   this.fechaCompra=this.fechaInput.nativeElement.valueAsDate;
          xd.setDate(  this.fechaCompra=this.fechaInput.nativeElement.valueAsDate.getDate()+5)
       
          this.compraService.guardarPendiente(new ventaPendiente(this.loginService.usuarioLog.cui,card.numero_tarjeta,this.total,"En camino",this.productosCarrito,  this.fechaCompra=this.fechaInput.nativeElement.valueAsDate,xd)).subscribe((res:ventaPendiente)=>{
            console.log(res);
            this.actualizarStock();
            this.router.navigate(['homepage'])
            this.carrtioService.productosCarrito=[];
            this.popAfirmation();
          })
        })
      }else{
        let xd  =   this.fechaCompra=this.fechaInput.nativeElement.valueAsDate;
        xd.setDate(  this.fechaCompra=this.fechaInput.nativeElement.valueAsDate.getDate()+5)
     
        this.compraService.guardarPendiente(new ventaPendiente(this.loginService.usuarioLog.cui,this.numeroTarjeta,this.total,"En camino",this.productosCarrito,  this.fechaCompra=this.fechaInput.nativeElement.valueAsDate,xd)).subscribe((res:ventaPendiente)=>{
          console.log(res);
          this.actualizarStock();
          this.router.navigate(['homepage'])
          this.carrtioService.productosCarrito=[];
          this.popAfirmation();
        })
    
      }
    }
 
  
  }else{
    console.log("carrito vacio");
    this.popErro();
  }
 

 


}



public actualizarStock(){
  for (let index = 0; index < this.productosCarrito.length; index++) {
    const element = this.productosCarrito[index];
    
    this.productoService.actualizarStock(element).subscribe((producto:producto)=>{
      console.log(producto);
      let gananciaSistema = Number((element.precio*0.05).toFixed(2))
      let gananciaVendedor = Number((element.precio*0.95).toFixed(2))
      let fecha  =   this.fechaCompra=this.fechaInput.nativeElement.valueAsDate;
      fecha.setDate(  this.fechaCompra=this.fechaInput.nativeElement.valueAsDate.getDate()+5)
      this.compraService.registrarProdVendido(new productoVendido(element.titulo_producto,element.descripcion,element.categoria,1,element.precio,gananciaVendedor,gananciaSistema,element.cui_vendedor,this.loginService.usuarioLog.cui,this.fechaCompra=this.fechaInput.nativeElement.valueAsDate,fecha)).subscribe((generated:productoVendido)=>{
      console.log(generated)

    })
    })


    
  }
}


public vaciarCarrito(){
  this.carrtioService.productosCarrito = [];
  this.productosCarrito=[];
}


public popAfirmation(){
  Swal.fire(
    'Compra Realizada',
  )
}

public popErro(){
  Swal.fire(
    'Error',
    'El carrito esta vacio',
    
  )
}




}
