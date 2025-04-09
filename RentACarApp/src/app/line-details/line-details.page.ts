import { Component, OnInit } from '@angular/core';
import { Linea } from '../shared/cliente.model';
import { StorageService } from '../shared/storage.service';

@Component({
    selector: 'app-line-details',
    templateUrl: './line-details.page.html',
    styleUrls: ['./line-details.page.scss'],
})
export class LineDetailsPage implements OnInit
{
    public lineDetail!: Linea;

    constructor(private storageService: StorageService) { }

    async ngOnInit()
    {
        this.lineDetail = await this.storageService.get('selectedLine');
    }

}
