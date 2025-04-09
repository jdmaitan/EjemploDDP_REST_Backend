import { Component, NgZone, OnInit } from '@angular/core';
import { Cliente, Factura, Reserva } from '../shared/cliente.model';
import { StorageService } from '../shared/storage.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-invoices',
    templateUrl: './invoices.page.html',
    styleUrls: ['./invoices.page.scss'],
})
export class InvoicesPage implements OnInit 
{
    client!: Cliente;

    constructor(private storageService: StorageService, private zone: NgZone, private router: Router) { }

    async ngOnInit()
    {
        const clientData = await this.storageService.get('cliente');

        this.zone.run(() =>
        {
            this.client = clientData;
        });
    }

    async seeInvoiceDetails(invoice: Factura)
    {
        this.storageService.set('selectedInvoice', invoice);
        this.router.navigate(['tabs/invoice-details']);
    }
}
