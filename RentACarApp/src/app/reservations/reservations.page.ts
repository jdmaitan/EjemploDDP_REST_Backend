import { Component, NgZone, OnInit } from '@angular/core';
import { Cliente, Reserva } from '../shared/cliente.model';
import { Router } from '@angular/router';
import { StorageService } from '../shared/storage.service';

@Component({
    selector: 'app-reservations',
    templateUrl: './reservations.page.html',
    styleUrls: ['./reservations.page.scss'],
})
export class ReservationsPage implements OnInit 
{
    reservations!: Reserva[];

    constructor(private storageService: StorageService, private zone: NgZone, private router: Router) { }

    async ngOnInit()
    {
        const reservationsData = await this.storageService.get('reservations');

        this.zone.run(() =>
        {
            this.reservations = reservationsData;
        });
    }

    async seeReservationDetails(reservation: Reserva)
    {
        this.storageService.set('selectedReservation', reservation);
        this.router.navigate(['tabs/reservation-details']);
    }
}
