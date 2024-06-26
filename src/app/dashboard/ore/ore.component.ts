import {Component, OnInit} from '@angular/core';
import Chart from 'chart.js/auto';
import {GlobalService} from "../../service/global.service";
import {AppComponent} from "../../app.component";
import {PlayerMinecraftApiInterface} from "../../interface/player-minecraft-api.interface";


@Component({
  selector: 'app-ore',
  templateUrl: './ore.component.html',
  styleUrls: ['./ore.component.css']
})
export class OreComponent implements OnInit {

  statsAll:any[] = [];
  statsWorld:any[] = [];

  servInfo:any|undefined;
  statsType:any[] = [];

  constructor(private globalService: GlobalService,
              private app: AppComponent) {}

  ngOnInit(): void {
    this.generateShema();
    this.getGlobalStats();
    this.getInfoServ();
    this.statsType = this.app.statsType;
  }

  getGlobalStats(): void {
    this.globalService.getGlobal("stats", this.app.setURL('tyroserv')).subscribe((response) => {

      if (response.status == "ok"){
        this.statsAll = Object.entries(response.result.all);
        this.statsWorld = Object.entries(response.result.world);

        //FORMATAGE DES STATS WORLD
        let newStatsWorld:any[] = [];
        this.statsWorld.forEach(worldOne => {
          newStatsWorld[worldOne[0]] = Object.entries(worldOne[1])
        });
        this.statsWorld = newStatsWorld;

        // console.log(this.statsAll);
        // console.log(this.statsWorld)

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

  generateShema(){
    const ctx = document.getElementById('myChart');

    // @ts-ignore
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Rhodonite', 'Tyrolium', 'Yellorite', 'Aventurine', 'Amethys', 'Volcanium'],
        datasets: [{
          label: 'Obtenue',
          data: [12, 19, 3, 5, 2, 3]
        },
          {
            label: 'Miné',
            data: [10, 5, 4, 0, 10, 0]
          }]
      }
    });
  }

















  /*  STATS TRAITEMENT  */


  formatageStats(statsName:string):string{

    let statsNameCorrect = statsName.substring(5);

    return statsNameCorrect;

  }

  formatageStatsName(statsName: string, type: string):string{

    let delChiffre = 5 + type.length + 1;

    let statsNameCorrect = statsName.substring(delChiffre);

    return statsNameCorrect;

  }

  formatageStatsUrl(statsName: string, type: string):string{

    let delChiffre = 5 + type.length + 1;

    let statsNameCorrect = statsName.substring(delChiffre);

    let urlIconeStats = statsNameCorrect.replace(/\./g, "/");

    return urlIconeStats;

  }

  typeStats(statsName:string){

    statsName = this.formatageStats(statsName);

    let typeStats = "none";

    this.statsType.forEach(typeOne =>{

      if (statsName.substring(0, typeOne.type.length) == typeOne.type){
        typeStats = typeOne.type
      }

    })

    if (!statsName.includes(".")){
      typeStats = "classic";
    }

    return typeStats;

  }

  imageLoadFailed(event: any) {
    event.target.src = 'https://tyroserv.fr/texture/none.png';
  }








}
