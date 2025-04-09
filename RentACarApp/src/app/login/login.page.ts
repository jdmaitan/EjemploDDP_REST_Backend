import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService } from '../shared/cliente.service';
import { Cliente, Reserva } from '../shared/cliente.model';
import { StorageService } from '../shared/storage.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit
{

    public loginForm!: FormGroup;
    public token!: String;
    public client!: Cliente;
    public reservations!: Reserva[];
    public errorMessage!: string;

    constructor(private fb: FormBuilder,
        private router: Router,
        private storage: StorageService,
        private clientService: ClienteService)
    { }

    ngOnInit()
    {
        this.loginForm = this.fb.group(
            {
                'dni': ['', Validators.compose([
                    Validators.required
                ])],
                'password': ['', Validators.compose([
                    Validators.required
                ])]
            });
    }

    get f() 
    {
        return this.loginForm.controls;
    }

    async login()
    {
        this.clientService.login(this.f['dni'].value, this.f['password'].value)
            .subscribe(token =>
            {
                this.token = token;
                this.storage.set('token', this.token);
                /// En caso correcto se recupera el cliente registrado
                this.clientService.getClientePorDNI(token)
                    .subscribe((client: Cliente) =>
                    {
                        this.client = client;
                        this.storage.set('cliente', this.client);

                        this.clientService.getClientReservations(client.dni)
                            .subscribe((reservations: Reserva[]) =>
                            {
                                this.reservations = reservations;
                                this.storage.set('reservations', this.reservations);
                                this.router.navigate(["tabs/client"]);
                            }
                            );
                    }
                    );
            },
                (error) =>
                {
                    this.errorMessage = "DNI o password incorrectos";
                    throw error;
                }
            );
    }
}

