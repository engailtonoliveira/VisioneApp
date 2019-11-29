import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'cinco-s',
    loadChildren: () => import('./cinco-s/cinco-s.module').then(m => m.CincoSPageModule)
   },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'indicator',
    loadChildren: () => import('./indicator/indicator.module').then(m => m.IndicatorPageModule)
  },
  {
    path: 'view-indicator/:ugb_id',
    loadChildren: () => import('./indicator/view-indicator/view-indicator.module').then(m => m.ViewIndicatorPageModule)
  },
  {
    path: 'ugb',
    loadChildren: () => import('./ugb/ugb.module').then(m => m.UgbPageModule)
  },
  {
    path: 'view-grafic/:id',
    loadChildren: () => import('./ugb/view-grafic/view-grafic.module').then(m => m.ViewGraficPageModule)
  },
  {
    path: 'view-indicator-detail/:ugb_id/:indicator_id/:is_checkList/:ugb_name',
    loadChildren: () => import('./indicator/view-indicator-detail/view-indicator-detail.module').then(m => m.ViewIndicatorDetailPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
