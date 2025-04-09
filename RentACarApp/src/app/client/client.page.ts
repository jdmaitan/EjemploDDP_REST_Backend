import { Component, NgZone, OnInit } from '@angular/core';
import { Cliente, Factura, Reserva } from '../shared/cliente.model';
import { StorageService } from '../shared/storage.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-client',
    templateUrl: './client.page.html',
    styleUrls: ['./client.page.scss'],
})
export class ClientPage implements OnInit 
{
    client!: Cliente;
    reservations!: Reserva[];

    constructor(private storageService: StorageService, private zone: NgZone, private router: Router) { }

    async ngOnInit()
    {
        const clientData = await this.storageService.get('cliente');
        const reservationsData = await this.storageService.get('reservations');

        this.zone.run(() =>
        {
            this.client = clientData;
            this.reservations = reservationsData;
            console.log(this.client);
            console.log(this.reservations);
        });
    }

    async seeInvoiceDetails(invoice: Factura)
    {
        this.storageService.set('selectedInvoice', invoice);
        this.router.navigate(['tabs/invoice-details']);
    }

    async seeReservationDetails(reservation: Reserva)
    {
        this.storageService.set('selectedReservation', reservation);
        this.router.navigate(['tabs/reservation-details']);
    }
}
