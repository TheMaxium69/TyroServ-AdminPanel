import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AppComponent} from "../../app.component";
import {PlayerDetailService} from "../../service/player-detail.service";
import {UserMinecraftApiInterface} from "../../interface/user-minecraft-api.interface";
import {GlobalService} from "../../service/global.service";

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})
export class PlayerDetailComponent implements OnInit{

  playerUUID: string | null | undefined;
  playerInfo:UserMinecraftApiInterface|undefined;
  statsAll:any[] = [];
  statsWorld:any[] = [];

  servInfo:any|undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private playerDetailService: PlayerDetailService,
    private globalService: GlobalService,
    private app: AppComponent,) {
  }

  ngOnInit(): void {

    this.playerUUID = this.route.snapshot.paramMap.get('uuid');

    if (this.playerUUID){
      this.getInfoPlayer(this.playerUUID)
      this.getInfoServ();
    } else {
      this.router.navigate(['/err']);
    }

  }


  getInfoPlayer(uuid:string){
    this.playerDetailService.getPlayerAllByUUID(uuid, this.app.setURL('tyroserv')).subscribe((response) => {

      if (response.status == "ok" && response.result.player !== "no player"){

        this.playerInfo = response.result;

        this.statsAll = Object.entries(response.result.stats.all);
        this.statsWorld = Object.entries(response.result.stats.world);

        //FORMATAGE DES STATS WORLD
        let newStatsWorld:any[] = [];
        this.statsWorld.forEach(worldOne => {
          newStatsWorld[worldOne[0]] = Object.entries(worldOne[1])
        });
        this.statsWorld = newStatsWorld;
        console.log(this.statsWorld)

      } else {
        this.router.navigate(['/err']);
      }

    });
  }

  getInfoServ(){

    this.globalService.getGlobal('servers', this.app.setURL('tyroserv')).subscribe((response) => {

      if (response.status == "ok"){
        this.servInfo = response.result;
      }

    });
  }

}
