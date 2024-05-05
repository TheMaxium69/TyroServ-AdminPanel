import { Component } from '@angular/core';
import {GlobalService} from "../../service/global.service";
import {AppComponent} from "../../app.component";
import {FactionMinecraftApiInterface} from "../../interface/faction-minecraft-api.interface";

@Component({
  selector: 'app-faction',
  templateUrl: './faction.component.html',
  styleUrls: ['./faction.component.css']
})
export class FactionComponent {

  factionAll:FactionMinecraftApiInterface[] = [];
  nbFactionCreate:Number|undefined = 0;
  searchTerm: string = '';
  constructor(private globalService: GlobalService,
              private app: AppComponent) {}

  ngOnInit(): void {

    this.getGlobalPlayerAll();

  }

  getGlobalPlayerAll(): void {
    this.globalService.getGlobal("factions", this.app.setURL('tyroserv')).subscribe((response) => {

      if (response.status == "ok"){
        this.factionAll = response.result;
        this.nbFactionCreate = this.factionAll.length;

        this.factionAll.forEach((faction: any) => {
          faction.foundedDate = new Date(faction.foundedDate);
        });

      }

    });
  }
}
