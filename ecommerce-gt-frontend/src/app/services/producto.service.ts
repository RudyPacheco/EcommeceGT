import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { producto } from "../models/producto";
import { usuario } from "../models/usuario";



@Injectable({
    providedIn:'root'
})


export class productoService{

    productoSeleccionado!:producto;
    
    readonly APY_URL = "http://localhost:3000/producto/";
  
    constructor(private httpClient: HttpClient) {  }


    public saveImgProducto(formData: FormData): Observable<string>{
        return this.httpClient.post<string>(this.APY_URL+"save-img-producto", formData);
      }
    


      public saveProducto(producto:producto): Observable<producto>{
        return this.httpClient.post<producto>(this.APY_URL+"save-product", producto);
      }


      public getImgProducto(url:String): Observable<Blob>{
        return this.httpClient.get(this.APY_URL+'get-img-producto?url='+url, { responseType: 'blob'});
      }


      public cargarProductosAceptados(cui:Number):Observable<producto[]>{
        return this.httpClient.get<producto[]>(this.APY_URL+"listar-producto-aceptado?cui="+cui);
      }


      public cargarProductosSolicitud():Observable<producto[]>{
        return this.httpClient.get<producto[]>(this.APY_URL+"listar-producto-solicitud");
      }

      public aceptarPRoducto(producto:producto):Observable<producto>{
        return this.httpClient.post<producto>(this.APY_URL+"aceptar",producto);
      }

      public cargarProductosCategoria(cui:Number,categoria:string):Observable<producto[]>{
        return this.httpClient.get<producto[]>(this.APY_URL+"listar-producto-filtrado?cui="+cui+"&categoria="+categoria);
      }
      
      public seleccionarProducto(producto:producto){
        this.productoSeleccionado=producto;
    }

    public actualizarStock(producto:producto):Observable<producto>{
      return this.httpClient.post<producto>(this.APY_URL+"actualizar",producto)
    }


    public usuarioSolicitudes(usuario:usuario):Observable<producto[]>{
      return this.httpClient.post<producto[]>(this.APY_URL+"usuario-producto-solicitud",usuario)
    }

    public usuarioPublicado(usuario:usuario):Observable<producto[]>{
      return this.httpClient.post<producto[]>(this.APY_URL+"usuario-producto-publicado",usuario)
    }

    public reportClienteMasProdVenta():Observable<producto[]>{
      return this.httpClient.get<producto[]>(this.APY_URL+"report-cliente-mas-prod-venta")
    }
}