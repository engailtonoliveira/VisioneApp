import { Injectable } from '@angular/core';

import { Platform, LoadingController  } from '@ionic/angular';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

// Utility
import { BehaviorSubject, Observable, from, of, throwError } from 'rxjs';
import { take, map, switchMap, finalize, catchError } from 'rxjs/operators';

// Native pluguins
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Injectable({
  providedIn: 'root'
})
export class IndicadoresService {
  private userData = new BehaviorSubject(null);

  constructor(
    private http: HttpClient,
    private plt: Platform,
    private router: Router,
    private loadingCtrl: LoadingController,
    private geolocation: Geolocation
  ) { }

  private apiUrl = 'https://localhost:44394/api/';

  public getUgbs(IdLider: number): Observable<any> {
    const controller = 'UGBs/lider/' + IdLider;
    return this.http.get<any>(this.apiUrl + controller);
  }

  public getDepartaments(): Observable<any> {
    const controller = 'Departments';
    return this.http.get<any>(this.apiUrl + controller);
  }

  public getIndicators(ugbId: number): Observable<any> {
    const controller = 'UGB_Indicadores/UGB/' + ugbId;
    return this.http.get<any>(this.apiUrl + controller);
  }

  public getItensIndicators(indicatorId: string): Observable<any> {
    const controller = 'IndicadorCheckListViewModels/Indicador/' + indicatorId;
    return this.http.get<any>(this.apiUrl + controller);
  }

  public getIndicatorData(indicatorId: string): Observable<any> {
    const controller = 'UGB_Indicadores/Indicator/' + indicatorId;
    return this.http.get<any>(this.apiUrl + controller);
  }

  /*public getIndicators(ugbId: number): Promise<any> {
    const controller = 'UGB_Indicadores/UGB/' + ugbId;
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl + controller).subscribe((response) => {
        resolve(response);
      }, (err) => {
        reject(err);
      });
    }).catch((err) => {
      throw err;
    });
  }

  public getItensIndicators(indicatorId: string): Promise<any> {
    const controller = 'IndicadorCheckListViewModels/Indicador/' + indicatorId;
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl + controller).subscribe((response) => {
        resolve(response);
      }, (err) => {
        reject(err);
      });
    }).catch((err) => {
      throw err;
    });
  }

  public getIndicatorData(indicatorId: string): Promise<any> {
    const controller = 'UGB_Indicadores/Indicator/' + indicatorId;
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl + controller).subscribe((response) => {
        resolve(response);
      }, (err) => {
        reject(err);
      });
    }).catch((err) => {
      throw err;
    });
  }


  public async saveValues(ugb: {id: number, name: string, actId: number, actName: string,
    indicator: Array<{ id: number; name: string; value: number }> }) {

    let coords: { latitude: number; longitude: number };

    if (ugb == null || ugb.indicator == null) {
      return null;
    }
    console.log(ugb);
    this.geolocation.getCurrentPosition().then((resp) => {
      // coords.latitude =  resp.coords.latitude;
      // coords.longitude = resp.coords.longitude;

      return new Promise((resolve, reject) => {
        this.http.post(this.apiUrl, ugb).subscribe((response) => {
          resolve(response);
        }, (err) => {
          reject(err);
        });
      }).catch((err) => {
        throw err;
      });
    }).catch((error) => {
      throw error;
    });
  }
  public getUgbs(IdLider: number): Promise<any> {
    const controller = 'UGBs/lider/' + IdLider;
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl + controller).subscribe((response) => {
        resolve(response);
      }, (err) => {
        reject(err);
      });
    }).catch((err) => {
      throw err;
    });
  }*/

}
