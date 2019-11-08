import { Chart } from 'chart.js';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-grafic',
  templateUrl: './view-grafic.page.html',
  styleUrls: ['./view-grafic.page.scss'],
})
export class ViewGraficPage implements OnInit {

  @ViewChild('barChart', {static: false}) barChart;

  bars: any;
  activityId: number;
  activityName: string;
  name = 'Brilho do Sol';
  colors: Array<string> = [];
  goals: Array<number> = [];
  data: Array<number> = [];
  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe( params => {
      this.activityId = parseInt(params.get('id'), 8);
    });
    this.getNameActivity();
    this.goals = [8, 8, 8, 8, 8];
    this.data = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10),
       Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
  }

  getNameActivity() {
    switch ( this.activityId ) {
      case 1 :
        this.activityName = 'Poda de Produção';
        break;
      case 2 :
        this.activityName = 'Torção de Varas';
        break;
      case 3 :
        this.activityName = 'Amarrio Seco';
        break;
      case 4 :
        this.activityName = 'Manutenção de Latadas';
        break;
      case 5 :
        this.activityName = 'Contagem de Brotação';
        break;
      case 6 :
        this.activityName = 'Desbrota';
        break;
      case 7 :
        this.activityName = '1° Amarrion Verde';
        break;
      case 8 :
        this.activityName = '1° Desfolha';
        break;
      case 9 :
        this.activityName = 'Retirada de Toco';
        break;
      case 10 :
        this.activityName = 'Bifurcação';
        break;
      case 11 :
        this.activityName = 'Arejamento';
        break;
      case 12 :
        this.activityName = '1° Desfolha';
        break;
      default:
        break;
    }

  }

  ionViewDidEnter() {
    this.builtDataBar();
  }

  builtDataBar() {
    this.generateColor();
    this.createBarChart();
  }

  generateColor() {
    let color: string;
    const cloneData: Array<number> = this.data;
    const cloneGoals: Array<number> = this.goals;
    this.colors = [];
    const dataLeng: number = cloneData.length;

    for ( let i = 0; i < dataLeng; i++ ) {
      if ( cloneData[i] > cloneGoals[i] ) {
        color = 'blue';
      } else {
        color = 'red';
      }
      this.colors.push(color);
    }
  }

  createBarChart() {
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'bar',
      data: {
        labels: ['SEM1', 'SEM2', 'SEM3', 'SEM4'],
        datasets: [{
          label: 'Semanas',
          data: this.data,
          backgroundColor: this.colors,
          borderWidth: 1
        }, {
          label: 'Meta',
          data: this.goals,
          borderColor: 'rgb(194, 38, 38)',
          borderWidth: 1,
          type: 'line'
        } ]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

  onChangeUGB( event ) {
    const ugbID = parseInt( event.detail.value, 8 );

    switch ( ugbID ) {
      case 1:
        this.name = 'Brilho do Sol';
        this.data = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10),
          Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
        break;
      case 2:
        this.name = 'Os Parceiros';
        this.data = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10),
          Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
        break;
      case 3:
        this.name = 'Da Paz';
        this.data = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10),
          Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
        break;
      default:
        break;
    }
    this.builtDataBar();
  }

}
