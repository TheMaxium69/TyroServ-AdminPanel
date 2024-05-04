import {Component, OnInit} from '@angular/core';
import Chart from 'chart.js/auto';


@Component({
  selector: 'app-ore',
  templateUrl: './ore.component.html',
  styleUrls: ['./ore.component.css']
})
export class OreComponent implements OnInit {

  ngOnInit(): void {


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
