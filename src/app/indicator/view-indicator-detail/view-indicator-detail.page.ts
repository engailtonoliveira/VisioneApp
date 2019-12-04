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
  private idUgb: string;
  private usuarioName = 'f02';
  private isChequeList;
  private isMethodDirect = false;

  private itensIndicator: Array<{
    id: number;
    itensChecar: string;
    pontosPossiveis: number;
    idIndicador: number;
    nomeIndicador: string;
    maxDate: any;
    data: Date;
    value: number;
  }>;

  private indicator: Array<{
    id: number;
    idEstabelecimento: number;
    nome: string;
    meta: number;
    escalaMax: number;
    escalaMin: number;
    valorMaximo: number;
    valorMinino: number;
    value: number;
  }>;

  private indicadorDados: {
    idEstabelecimento: number;
    idIndicador: number;
    idGestor: number;
    idUGB: number;
    data: Date;
    dado: number;
    meta: number;
    valorMaximo: number;
    valorMinimo: number;
    usuario: string;
    latitude: number;
    longitude: number;
    idCheckList: number;
    dataCriacao: Date;
 };

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
      this.idUgb = params.get('ugb_id');
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
      this.presentAlert(err.message);
      console.log('error');
    });
  }

  async saveValues(event: { target: HTMLInputElement; }) {
    event.target.disabled = true;
    const loading = await this.loadingCtrl.create();
    await loading.present();

    if (this.isChequeList) {
      console.log(this.itensIndicator);
    } else {
      this.indicadorDados = this.createObjIndicatorData();
      console.log(this.indicadorDados);
    }

    /*this.indicatorService.getPosition().then((response) => {
      this.indicadorDados.latitude = response.coords.latitude;
      this.indicadorDados.longitude = response.coords.longitude;

      this.indicatorService.setIndicatorData(this.indicadorDados).subscribe((result) => {
        const title = 'Dados inserido com sucesso';
        const msg = 'Classificação: ' + result.dado;

        this.presentAlert(msg, title);
        console.log(result);
        loading.dismiss();
        event.target.disabled = false;
      }, (err) => {
        loading.dismiss();
        event.target.disabled = false;
        this.presentAlert(err.message);
        console.log(err);
      });
    }).catch((error) => {
      loading.dismiss();
      event.target.disabled = false;
      console.log(error);
      throw error;
    });*/
  }

  private createObjIndicatorData() {
    const myObj = {
      idEstabelecimento: this.indicator[0].idEstabelecimento,
      idGestor: 7997,
      idIndicador: this.indicator[0].id,
      idUGB: Number(this.idUgb),
      data: new Date(),
      dado: this.indicator[0].value,
      usuario: this.usuarioName,
      latitude: null,
      longitude: null,
      dataCriacao:  new Date()
    };
    return JSON.parse(JSON.stringify(myObj));
  }

  private createObjIndicatorDataCheckList() {
    this.itensIndicator.forEach(element => {
      console.log(element);
    });
  }

  async presentAlert( msg: any, title: string = null ) {
    const alert = await this.alertController.create({
      header: title,
      message: msg,
      buttons: ['OK']
    });
    await alert.present();
  }

}
