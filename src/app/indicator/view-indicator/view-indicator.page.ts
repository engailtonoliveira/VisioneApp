import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Injectable } from '@angular/core';

import { Geolocation } from '@ionic-native/geolocation/ngx';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-view-indicator',
  templateUrl: './view-indicator.page.html',
  styleUrls: ['./view-indicator.page.scss'],
})
export class ViewIndicatorPage implements OnInit {

  private activityId: number;
  private activityName: string;

  private ugbId: number;
  private ugbName: string;
  public indicators: Array<{ id: number; name: string; value: number }>;

  constructor(
    public activatedRoute: ActivatedRoute,
    private geolocation: Geolocation
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.paramMap.subscribe(params => {
      this.activityId = parseInt(params.get('id'), 8);
      this.ugbId = parseInt(params.get('ugb_id'), 8 );
    });
  }

  ionViewWillEnter() {
    switch ( this.activityId ) {
      case 1:
        this.activityName = 'Amarrio Verde';
        this.indicators = [{
          id: 1,
          name: 'Indicator1',
          value: null
        }, {
          id: 2,
          name: 'Indicator2',
          value: null
        }, {
          id: 2,
          name: 'Indicator3',
          value: null
        }];
        break;
      case 2:
        this.activityName = 'Roço';
        this.indicators = [{
          id: 4,
          name: 'Indicator4',
          value: null
        }, {
          id: 5,
          name: 'Indicator5',
          value: null
        }, {
          id: 6,
          name: 'Indicator6',
          value: null
        }];
        break;
      case 3:
        this.activityName = 'Poda';
        this.indicators = [{
          id: 7,
          name: 'Indicator7',
          value: null
        }, {
          id: 8,
          name: 'Indicator8',
          value: null
        }, {
          id: 9,
          name: 'Indicator9',
          value: null
        }];
        break;
        case 4:
          this.activityName = 'Manutenção de Latadas';
          this.indicators = [{
            id: 7,
            name: 'Indicator8',
            value: null
          }];
          break;
        case 5:
          this.activityName = 'Contagem de Brotação';
          this.indicators = [{
            id: 7,
            name: 'Indicator9',
            value: null
          }];
          break;
        case 6:
            this.activityName = 'Desbrota';
            this.indicators = [{
              id: 7,
              name: 'Indicator10',
              value: null
            }];
            break;
      default:
        break;
    }

    switch ( this.ugbId ) {
      case 1:
        this.ugbName = 'Brilho do Sol';
        break;
      case 2:
        this.ugbName = 'Os Parceiros';
        break;
      case 3:
        this.ugbName = 'Da Paz';
        break;
      case 4:
        this.ugbName = 'As minas';
        break;
      case 5:
        this.ugbName = 'UGB5';
        break;
      case 6:
        this.ugbName = 'UGB6';
        break;
      case 7:
        this.ugbName = 'UGB7';
        break;
      default:
        break;
    }
  }

  saveAllData() {
    console.log(this.indicators);
    this.getCurrentPosition();
  }

  getCurrentPosition() {
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log(resp.coords.latitude);
      console.log(resp.coords.longitude);
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }



}
