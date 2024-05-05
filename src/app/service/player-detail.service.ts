import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CallMinecraftApiInterface} from "../interface/call-minecraft-api.interface";

@Injectable({
  providedIn: 'root'
})
export class PlayerDetailService {
  constructor(private http: HttpClient) {}

  getPlayerAllByPseudo(pseudo: string, url:string): Observable<CallMinecraftApiInterface> {
    return this.http.get<CallMinecraftApiInterface>(url + '?pseudo=' + pseudo);
  }
  getPlayerAllByUUID(uuid: string, url:string): Observable<CallMinecraftApiInterface> {
    return this.http.get<CallMinecraftApiInterface>(url + '?uuid=' + uuid);
  }
  getPlayerTaskByPseudo(pseudo: string, task:string, url:string): Observable<CallMinecraftApiInterface> {
    return this.http.get<CallMinecraftApiInterface>(url + '?task=' + task + '&pseudo=' + pseudo);
  }
  getPlayerTaskByUUID(uuid: string, task:string, url:string): Observable<CallMinecraftApiInterface> {
    return this.http.get<CallMinecraftApiInterface>(url + '?task=' + task + '&uuid=' + uuid);
  }



}
