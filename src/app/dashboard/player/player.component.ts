import {Component, OnInit} from '@angular/core';
import {GlobalService} from "../../service/global.service";
import {AppComponent} from "../../app.component";
import {PlayerMinecraftApiInterface} from "../../interface/player-minecraft-api.interface";

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit{

  playerAll:PlayerMinecraftApiInterface[] = [];
  nbPlayerUnique:Number|undefined = 0;
  searchTerm: string = '';

  constructor(private globalService: GlobalService,
              private app: AppComponent) {}

  ngOnInit(): void {

    this.getGlobalPlayerAll();

  }

  getGlobalPlayerAll(): void {
    this.globalService.getGlobal("players", this.app.setURL('tyroserv')).subscribe((response) => {

      if (response.status == "ok"){
        this.playerAll = response.result;
        this.nbPlayerUnique = this.playerAll.length;

      }

    });
  }

}
