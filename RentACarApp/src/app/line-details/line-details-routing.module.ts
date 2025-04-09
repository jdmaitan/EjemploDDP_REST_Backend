import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LineDetailsPage } from './line-details.page';

const routes: Routes = [
  {
    path: '',
    component: LineDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LineDetailsPageRoutingModule {}
