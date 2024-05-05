import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CallMinecraftApiInterface} from "../interface/call-minecraft-api.interface";

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  constructor(private http: HttpClient) {}

  getGlobal(task:string, url:string): Observable<CallMinecraftApiInterface> {
    return this.http.get<CallMinecraftApiInterface>(url + '?global=one&task=' + task);
  }

}
