import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeolocalizacaoPage } from './geolocalizacao.page';

const routes: Routes = [
  {
    path: '',
    component: GeolocalizacaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeolocalizacaoPageRoutingModule {}
