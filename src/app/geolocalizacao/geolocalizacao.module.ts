import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeolocalizacaoPageRoutingModule } from './geolocalizacao-routing.module';

import { GeolocalizacaoPage } from './geolocalizacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeolocalizacaoPageRoutingModule
  ],
  declarations: [GeolocalizacaoPage]
})
export class GeolocalizacaoPageModule {}
