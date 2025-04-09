import { Component, OnInit } from '@angular/core';
import { Coche, Reserva } from '../shared/cliente.model';
import { StorageService } from '../shared/storage.service';

@Component({
    selector: 'app-reservation-details',
    templateUrl: './reservation-details.page.html',
    styleUrls: ['./reservation-details.page.scss'],
})
export class ReservationDetailsPage implements OnInit
{
    reservation!: Reserva;
    public car!: Coche;

    constructor(private storageService: StorageService) { }

    async ngOnInit()
    {
        this.reservation = await this.storageService.get('selectedReservation');

        if (this.reservation)
        {
            this.car = this.reservation.coche
        }
    }

}
