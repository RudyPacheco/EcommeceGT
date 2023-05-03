import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { usuario } from "../models/usuario";
import { usuarioLogin } from "../models/usuarioLogin";

@Injectable({
    providedIn:'root'
})



export class empleadoService{



    readonly APY_URL = "http://localhost:3000/api/";


    constructor(private httpClient: HttpClient) {  }

    public listarEmpleados(): Observable<usuario[]>{
        return this.httpClient.get<usuario[]>(this.APY_URL+"listar");
    }



  
}