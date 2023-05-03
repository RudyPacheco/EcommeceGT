import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { producto } from "../models/producto";


@Injectable({
    providedIn:'root'
})



export class carritoSercie{

    productosCarrito:producto[]=[];


    readonly APY_URL = "http://localhost:3000/api/login";


    constructor(private httpClient: HttpClient) {  }


}