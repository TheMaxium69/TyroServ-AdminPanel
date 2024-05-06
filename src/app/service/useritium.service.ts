import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CallUseritiumApiInterface} from "../interface/call-useritium-api.interface";

@Injectable({
  providedIn: 'root'
})
export class UseritiumService {
  constructor(private http: HttpClient) { }

  connection(body:string,  url:string): Observable<CallUseritiumApiInterface> {
    return this.http.post<CallUseritiumApiInterface>(url + '?controller=TyroServ&task=connectPanelAdmin', body);
  }


}
