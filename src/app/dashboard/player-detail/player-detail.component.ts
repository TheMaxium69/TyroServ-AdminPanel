import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AppComponent} from "../../app.component";
import {PlayerDetailService} from "../../service/player-detail.service";
import {UserMinecraftApiInterface} from "../../interface/user-minecraft-api.interface";

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})
export class PlayerDetailComponent implements OnInit{

  playerUUID: string | null | undefined;
  playerInfo:UserMinecraftApiInterface|undefined;
  statsRequest:any[] = [];
  statsAll:any[] = [];
  statsWorld:any[] = [];


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private playerDetailService: PlayerDetailService,
    private app: AppComponent,) {
  }

  ngOnInit(): void {

    this.playerUUID = this.route.snapshot.paramMap.get('uuid');

    if (this.playerUUID){
      this.getInfoPlayer(this.playerUUID)
    } else {
      this.router.navigate(['/err']);
    }

  }


  getInfoPlayer(uuid:string){
    this.playerDetailService.getPlayerAllByUUID(uuid, this.app.setURL('tyroserv')).subscribe((response) => {

      if (response.status == "ok" && response.result.player !== "no player"){

        this.playerInfo = response.result;
        console.log(this.playerInfo);


        this.statsRequest = response.result.stats;
        this.statsAll = Object.entries(response.result.stats.all);
        this.statsWorld = response.result.stats.world;
        console.log(this.statsAll);
        console.log(this.statsWorld);

      } else {
        this.router.navigate(['/err']);
      }

    });
  }


}
