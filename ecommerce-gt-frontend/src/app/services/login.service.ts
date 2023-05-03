import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { usuario } from "../models/usuario";
import { usuarioLogin } from "../models/usuarioLogin";

@Injectable({
    providedIn:'root'
})



export class loginServices{


    usuarioLog!:usuario;

    readonly APY_URL = "http://localhost:3000/api/login";


    constructor(private httpClient: HttpClient) {  }

    public iniciarSesion(usuario:usuarioLogin): Observable<usuario>{
        return this.httpClient.post<usuario>(this.APY_URL,usuario);
    }



    public agregarUsuario(usuario:usuario){
        this.usuarioLog=usuario;
    }


    public getUsuario(){
        return this.usuarioLog;
    }

}