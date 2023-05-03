import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { producto } from "../models/producto";
import { productoVendido } from "../models/productoVendido";
import { tarjeta } from "../models/tarjeta";
import { usuario } from "../models/usuario";
import { ventaPendiente } from "../models/ventaPendiente";


@Injectable({
    providedIn:'root'
})


export class ventaService{
    
    readonly APY_TARJETA = "http://localhost:3000/tarjeta";

    readonly APY_URL = "http://localhost:3000/pendiente";

    readonly APY_VENDIDO = "http://localhost:3000/venta";
  
    constructor(private httpClient: HttpClient) {  }


    public registrarUsuario(usuario:usuario): Observable<usuario>{
        return this.httpClient.post<usuario>(this.APY_URL,usuario);
    }

    public regsitrarTarjeta(tarjeta:tarjeta): Observable<tarjeta>{
        return this.httpClient.post<tarjeta>(this.APY_TARJETA+"/guardar",tarjeta);
    }


    public listarTarjetas(usuario:usuario):Observable<tarjeta[]>{
        return this.httpClient.post<tarjeta[]>(this.APY_TARJETA+"/listar",usuario);
    }


    public guardarPendiente(venta:ventaPendiente):Observable<ventaPendiente>{
        return this.httpClient.post<ventaPendiente>(this.APY_URL+"/guardar",venta);
    }


    public listarPendientes():Observable<ventaPendiente[]>{
        return this.httpClient.get<ventaPendiente[]>(this.APY_URL+"/listar")
    }


    public entrgarVenta(venta:ventaPendiente):Observable<ventaPendiente>{
        return this.httpClient.post<ventaPendiente>(this.APY_URL+"/aceptar",venta)
    }

    public registrarProdVendido(producto:productoVendido):Observable<productoVendido>{
        return this.httpClient.post<productoVendido>(this.APY_VENDIDO+"/vendido",producto)
    }


    public listarVentasUsuario(usuario:usuario):Observable<productoVendido[]>{
        return this.httpClient.post<productoVendido[]>(this.APY_VENDIDO+"/usuario-vendidos",usuario)
    }

    public listarComprasUsuario(usuario:usuario):Observable<productoVendido[]>{
        return this.httpClient.post<productoVendido[]>(this.APY_VENDIDO+"/usuario-comprados",usuario)
    }


    public getReportClienteMasPedidos(fechaInicial:string,fechaFinal:string): Observable<ventaPendiente[]>{
        return this.httpClient.get<ventaPendiente[]>(this.APY_URL+'/get-cliente-mas-peticiones?fechaI='+fechaInicial+'&fechaF='+fechaFinal)
      }
    
      public reportProdMasVendido(fechaInicial:string,fechaFinal:string):Observable<productoVendido[]>{
        return this.httpClient.get<productoVendido[]>(this.APY_VENDIDO+"/producto-mas-vendido?fechaI="+fechaInicial+"&fechaF="+fechaFinal)
    }

    public reportClinteMasVentas(fechaInicial:string,fechaFinal:string):Observable<productoVendido[]>{
        return this.httpClient.get<productoVendido[]>(this.APY_VENDIDO+"/cliente-mas-ventas?fechaI="+fechaInicial+"&fechaF="+fechaFinal)
    }

    public reportClinteMasGanancia(fechaInicial:string,fechaFinal:string):Observable<productoVendido[]>{
        return this.httpClient.get<productoVendido[]>(this.APY_VENDIDO+"/cliente-mas-ganancia?fechaI="+fechaInicial+"&fechaF="+fechaFinal)
    }



}