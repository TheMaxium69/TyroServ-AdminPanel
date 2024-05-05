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

  statsRequest:any[] = [];
  statsAll:any[] = [];
  statsWorld:any[] = [];

  constructor(private globalService: GlobalService,
              private app: AppComponent) {}

  ngOnInit(): void {
    this.generateShema()
    this.getGlobalStats()
  }

  getGlobalStats(): void {
    this.globalService.getGlobal("stats", this.app.setURL('tyroserv')).subscribe((response) => {

      if (response.status == "ok"){
        this.statsRequest = response.result;
        this.statsAll = Object.entries(response.result.all);
        console.log(this.statsAll);
        console.log(this.statsWorld);
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



}
