import { IndicadoresService } from './../service/indicadores.service';
import { Component } from '@angular/core';
import { LoadingController, AlertController } from '@ionic/angular';


@Component({
  selector: 'app-indicator',
  templateUrl: './indicator.page.html',
  styleUrls: ['./indicator.page.scss'],
})
export class IndicatorPage {

  private allUgbs: any;
  private isItemAvailable = false;
  private IdLider = 7997;
  private interfaceHeaderTitle = 'UGBs';
  private ugbs: Array<{
    id: number;
    idEstabelecimento: number;
    nome: string;
    idDepartamento: number;
    idGestor: string;
    status: number;
    idRepresentante: number;
  }>;

  constructor(
    private indicator: IndicadoresService,
    private loadingCtrl: LoadingController,
    private alertController: AlertController,
  ) {
    this.initializeItems();
  }

  async initializeItems() {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    this.indicator.getUgbs(this.IdLider).subscribe((result) => {
      loading.dismiss();
      this.ugbs = result;
      this.allUgbs = result;
      this.isItemAvailable = true;
    }, (err) => {
      loading.dismiss();
      this.presentAlert(err.message);
    });
  }

  getItems(ev: any) {
    let val = ev.target.value;
    if (val && val.trim() !== '') {
      this.ugbs = this.allUgbs;
      this.ugbs = this.allUgbs.filter((item) => {
        return (item.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    } else {
      this.ugbs = this.allUgbs;
    }
  }

  async presentAlert( msg: any ) {
    const alert = await this.alertController.create({
      message: msg,
      buttons: ['OK']
    });
    await alert.present();
  }
}