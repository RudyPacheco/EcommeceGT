import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { usuario } from "../models/usuario";


@Injectable({
    providedIn:'root'
})


export class registerService{
    
    readonly APY_URL = "http://localhost:3000/api/user";
  
    constructor(private httpClient: HttpClient) {  }


    public registrarUsuario(usuario:usuario): Observable<usuario>{
        return this.httpClient.post<usuario>(this.APY_URL,usuario);
    }


}