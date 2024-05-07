import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {CallUseritiumApiInterface} from "../interface/call-useritium-api.interface";

@Injectable({
  providedIn: 'root'
})
export class UseritiumService {
  constructor(private http: HttpClient) { }

  connection(body:string, url:string): Observable<CallUseritiumApiInterface> {

    let headers = new HttpHeaders({
      'Content-Type': 'multipart/form-data',
    });
    // headers.append('Content-Type', 'multipart/form-data');
    // headers.append('Content-Type', 'application/x-www-form-urlencoded');
    // headers.append('Content-Type', 'application/json');
    const options: {headers: HttpHeaders}  = { headers: headers };

    return this.http.post<CallUseritiumApiInterface>(url + '?controller=TyroServ&task=connectPanelAdmin', body, options);
  }

}
