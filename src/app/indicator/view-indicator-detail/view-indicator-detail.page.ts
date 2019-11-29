import { AlertController, LoadingController } from '@ionic/angular';
import { IndicadoresService } from './../../service/indicadores.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-indicator-detail',
  templateUrl: './view-indicator-detail.page.html',
  styleUrls: ['./view-indicator-detail.page.scss'],
})
export class ViewIndicatorDetailPage implements OnInit {

  private interfaceHeaderTitle = 'Inserir Valores do Indicador';
  private cardHeaderTitle: string;
  private cardHeaderSubtitle: string;

  private indicatorId: string;
  private ugbId: string;
  private isChequeList;
  private isMethodDirect = false;

  private itensIndicator: Array<{
    id: number;
    itensChecar: string;
    pontosPossiveis: number;
    idIndicador: number;
    nomeIndicador: string;
    maxDate: any;
    value: number;
  }>;

  private indicator: Array<{
    id: number;
    nome: string;
    meta: number;
    valorMaximo: number;
    valorMinimo: number;
    value: any;
 }>;

  constructor(
    public activatedRoute: ActivatedRoute,
    private indicatorService: IndicadoresService,
    private loadingCtrl: LoadingController,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      const tmp = params.get('is_checkList');
      this.isChequeList = ( tmp === '1' );
      this.isMethodDirect = ! this.isChequeList;
      this.ugbId = params.get('ugb_id');
      this.indicatorId = params.get('indicator_id');
      this.cardHeaderTitle = params.get('ugb_name');
    });
  }

  ionViewWillEnter() {
    if (this.isChequeList) {
      this.initializeItemsChequeList(this.indicatorId);
    } else {
      this.initializeItems(this.indicatorId);
    }
  }

  async initializeItemsChequeList(indicatorId: string) {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    this.indicatorService.getItensIndicators(indicatorId).subscribe((result) => {
      loading.dismiss();
      this.itensIndicator = result;
      this.cardHeaderSubtitle = this.itensIndicator[0].nomeIndicador;
    }, (err) => {
      loading.dismiss();
      this.presentAlert(err.message);
    });
  }

  async initializeItems(indicatorId: string) {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    this.indicatorService.getIndicatorData(indicatorId).subscribe((result) => {
      loading.dismiss();
      this.indicator = result;
      console.log(this.indicator);
    }, (err) => {
      loading.dismiss();
      console.log('error');
    });
  }

  saveValues(event: { target: HTMLInputElement; }) {
    event.target.disabled = true;
    if (this.isChequeList) {
      console.log(this.itensIndicator);
    } else {
      console.log(this.indicator);
    }
    /*this.indicator.saveValues( { id: this.id, name: this.name, actId: this.actId, actName: this.actName,
      indicator: this.indicatores} ).then((result) => {
        if (result) {
          event.target.disabled = false;
          this.router.navigateByUrl('/');
        } else {
        }
      }, (err) => {
        console.log('error');
      });*/
  }

  async presentAlert( msg: any ) {
    const alert = await this.alertController.create({
      message: msg,
      buttons: ['OK']
    });
    await alert.present();
  }

}
