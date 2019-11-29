import { LoadingController, AlertController } from '@ionic/angular';
import { IndicadoresService } from './../../service/indicadores.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-indicator',
  templateUrl: './view-indicator.page.html',
  styleUrls: ['./view-indicator.page.scss'],
})
export class ViewIndicatorPage implements OnInit {

  private allIndicators: any;
  private ugbId;
  private interfaceHeaderTitle = 'Indicadores';

  public indicators: Array<{
    id: number;
    idUGB: string;
    nome: string;
    nomeUGB: string;
    meta: number;
    valorMaximo: number;
    valorMinimo: number;
    metodoPreenchimento: boolean;
  }>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private indicator: IndicadoresService,
    private loadingCtrl: LoadingController,
    private alertController: AlertController
  ) {
    this.activatedRoute.paramMap.subscribe( params => {
      this.ugbId = params.get('ugb_id');
    });
  }

  ngOnInit() {
    this.initializeItems(this.ugbId);
  }

  async initializeItems(ugbId: number) {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    this.indicator.getIndicators(ugbId).subscribe((result) => {
      loading.dismiss();
      this.indicators = result;
      this.allIndicators = result;
    }, (err) => {
      loading.dismiss();
      this.presentAlert(err.message);
    });
  }

  getItems(ev: any) {
    let val = ev.target.value;
    if (val && val.trim() !== '') {
      this.indicators = this.allIndicators;
      this.indicators = this.indicators.filter((item) => {
        return (item.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    } else {
      this.indicators = this.allIndicators;
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
