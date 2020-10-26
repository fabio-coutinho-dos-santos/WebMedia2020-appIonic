import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core'
import {HttpEvent,HttpInterceptor,HttpHandler,HttpRequest} from '@angular/common/http'
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';
import { Mensagem } from '../Model/Mensagem'

@Injectable({
  providedIn: 'root'
})
export class LocalizationService {

    constructor(private http: HttpClient){}

    public postMensagem(mensagem:Mensagem) : Observable<Mensagem>
    {
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
            })
        }

        return this.http.post(
            //'http://10.0.0.10:3000/oapi/morador',
            'http://coutmasters.ddns.net:3000/api/teste',
            JSON.stringify(mensagem),
            httpOptions
        )
        .pipe(map((resp:any)=>resp))
    }

}