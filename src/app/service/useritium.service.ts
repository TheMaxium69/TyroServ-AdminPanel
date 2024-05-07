import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {CallUseritiumApiInterface} from "../interface/call-useritium-api.interface";

@Injectable({
  providedIn: 'root'
})
export class UseritiumService {
  constructor(private http: HttpClient) { }

  connection(email:string, password:string, url:string): Observable<CallUseritiumApiInterface> {

    const body = new HttpParams()
      .set('email_useritium', email)
      .set('mdp_useritium', password);


    let headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    const options: { headers: HttpHeaders } = {headers: headers};

    console.log(options)

    return this.http.post<CallUseritiumApiInterface>(url + '?controller=TyroServ&task=connectPanelAdmin', body.toString() , options);
  }
}
