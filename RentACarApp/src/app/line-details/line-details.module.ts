import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LineDetailsPageRoutingModule } from './line-details-routing.module';

import { LineDetailsPage } from './line-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LineDetailsPageRoutingModule
  ],
  declarations: [LineDetailsPage]
})
export class LineDetailsPageModule {}
