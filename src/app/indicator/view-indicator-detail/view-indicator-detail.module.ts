import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ViewIndicatorDetailPage } from './view-indicator-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ViewIndicatorDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ViewIndicatorDetailPage]
})
export class ViewIndicatorDetailPageModule {}
