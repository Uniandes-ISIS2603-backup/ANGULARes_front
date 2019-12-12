import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

import { AuthService } from '../auth.service';

import { User } from '../user';

import { ToastrService } from 'ngx-toastr';
import { Client } from '../client';
import { Router } from '@angular/router';
import { validateConfig } from '@angular/router/src/config';

@Component({
    selector: 'app-auth-login',
    templateUrl: './auth-login.component.html',
    styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent implements OnInit {

    /**
    * Constructor for the component
    * @param authService Auth service provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private authService: AuthService,
        private toastrService: ToastrService,
        private router: Router
    ) { }

    user: User;

    clientes : Client[];


    roles: String[];

    /**
    * Logs the user in with the selected role
    */
    login(): void {
        this.authService.login();
        this.toastrService.success('Logged in')
        this.validar();
    }

    getClientes() : void {
        this.authService.getClientes().subscribe(losClientes => this.clientes = losClientes);
      }

      validar(): void {
          this.clientes.forEach(element => {if(element.usser == this.user.name && element.password == this.user.password){         this.router.navigateByUrl('/' + 'clientes' + '/' + element.id);
        }

              
          });
      }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.user = new User();
        this.roles = ['Administrator', 'Client'];
        this.getClientes();
    }

}
