import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { categoria } from "../models/categoria";



@Injectable({
    providedIn:'root'
})


export class categoriaService{
    
    readonly APY_URL = "http://localhost:3000/categ/categorias";
  
    constructor(private httpClient: HttpClient) {  }


    public listarCategorias(): Observable<categoria[]>{
        return this.httpClient.get<categoria[]>(this.APY_URL);
    }


}