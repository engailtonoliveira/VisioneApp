import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-ugbs',
  templateUrl: './view-ugbs.page.html',
  styleUrls: ['./view-ugbs.page.scss'],
})
export class ViewUgbsPage implements OnInit {

  private activityId: number;
  public ugbs: Array<{ id: number; name: string; }> = [];

  constructor(
    private activatedRoute: ActivatedRoute
  ) {

    this.activatedRoute.paramMap.subscribe( params => {
      this.activityId = parseInt(params.get('id'), 8);
    });
  }

  ngOnInit() {
    this.getId();
  }

  getId() {
    switch ( this.activityId ) {
      case 1:
        this.ugbs = [{
          id: 1,
          name: 'Brilho do Sol'
        }, {
          name: 'Os Parceiros',
          id: 2,
        }, {
          id: 3,
          name: 'Da Paz',
        }];
        break;
      case 2:
        this.ugbs = [{
          id: 4,
          name: 'As Minas'
        }, {
          id: 1,
          name: 'Brilho do Sol',
        }, {
          id: 2,
          name: 'Os parceiros',
        }];
        break;
      case 3:
        this.ugbs = [{
          id: 1,
          name: 'Brilho do Sol'
        }, {
          id: 2,
          name: 'Os parceiros'
        }];
        break;
      case 4:
        this.ugbs = [{
          id: 5,
          name: 'UGB5'
        }, {
          id: 6,
          name: 'UGB6'
        }, {
          id: 7,
          name: 'UGB7',
        }];
        break;
      case 5:
        this.ugbs = [{
          id: 7,
          name: 'UGB7'
        }, {
          id: 1,
          name: 'Brilho do Sol',
        }, {
          id: 2,
          name: 'Os parceiros',
        }];
        break;
      case 6:
        this.ugbs = [{
          id: 1,
          name: 'Brilho do Sol'
        }, {
          id: 4,
          name: 'As Minas'
        }];
        break;
      default:
        break;
    }
  }
}