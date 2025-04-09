import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../shared/storage.service';
import { Factura, Linea } from '../shared/cliente.model';

@Component({
    selector: 'app-invoice-details',
    templateUrl: './invoice-details.page.html',
    styleUrls: ['./invoice-details.page.scss'],
})
export class InvoiceDetailsPage implements OnInit
{
    public invoice: Factura | undefined;

    constructor(private storageService: StorageService, private router: Router) { }

    async ngOnInit()
    {
        this.invoice = await this.storageService.get('selectedInvoice');
    }

    async seeLineDetails(lineDetails: Linea)
    {
        this.storageService.set('selectedLine', lineDetails);
        this.router.navigate(['tabs/line-details']);
    }
}
