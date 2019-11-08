import { Component } from '@angular/core';

@Component({
  selector: 'app-indicator',
  templateUrl: './indicator.page.html',
  styleUrls: ['./indicator.page.scss'],
})
export class IndicatorPage {

  public activity: Array<{ id: number; name: string; }> = [];

  constructor() {
    this.initializeItems();
  }

  initializeItems() {
    this.activity = [{
      id: 1,
      name: 'Poda de Produção'
    }, {
      name: 'Torção de Varas',
      id: 2,
    }, {
      id: 3,
      name: 'Amarrio Seco',
    }, {
      id: 4,
      name: 'Manutenção de Latadas'
    }, {
      name: 'Contagem de Brotação',
      id: 5,
    }, {
      id: 6,
      name: 'Desbrota',
    }, {
      id: 7,
      name: '1° Amarrion Verde'
    }, {
      name: '1° Desfolha',
      id: 8,
    }, {
      id: 9,
      name: 'Retirada de Toco',
    }, {
      id: 10,
      name: 'Bifurcação'
    }, {
      name: 'Arejamento',
      id: 11,
    }, {
      id: 12,
      name: '1° Desfolha',
    }];
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() !== '') {
      this.activity = this.activity.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
  }
}
