import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EletricidadePageRoutingModule } from './eletricidade-routing.module';

import { EletricidadePage } from './eletricidade.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EletricidadePageRoutingModule
  ],
  declarations: [EletricidadePage]
})
export class EletricidadePageModule {}
