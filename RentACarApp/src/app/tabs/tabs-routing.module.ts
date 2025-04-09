import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'client',
        loadChildren: () => import('../client/client.module').then(m => m.ClientPageModule)
      },
      {
        path: 'invoices',
        loadChildren: () => import('../invoices/invoices.module').then(m => m.InvoicesPageModule)
      },
      {
        path: 'invoice-details',
        loadChildren: () => import('../invoice-details/invoice-details.module').then(m => m.InvoiceDetailsPageModule)
      },
      {
        path: 'line-details',
        loadChildren: () => import('../line-details/line-details.module').then(m => m.LineDetailsPageModule)
      },
      {
        path: 'reservations',
        loadChildren: () => import('../reservations/reservations.module').then(m => m.ReservationsPageModule)
      },
      {
        path: 'reservation-details',
        loadChildren: () => import('../reservation-details/reservation-details.module').then(m => m.ReservationDetailsPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/client',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/client',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
