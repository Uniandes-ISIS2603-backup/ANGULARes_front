import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { catchError, map, tap } from "rxjs/operators";

import { Client } from './client'; 
import { ClientDetail } from './client-detail';

const API_URL =  environment.apiURL;
const clientes = '/clientes';

@Injectable()
export class ClientService {

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(private http : HttpClient) {}

  getClientes(): Observable<Client[]>{
     return this.http.get<Client[]>(API_URL + clientes);
  }

  getClienteDetail( clienteId): Observable<ClientDetail> {
    return this.http.get<ClientDetail>(API_URL + clientes + '/' + clienteId);
  }

  createCliente(cliente: Client): Observable<Client> {
    return this.http.post<Client>(API_URL + clientes, cliente, this.httpOptions).pipe(tap((cliente: Client) => console.log(`added cliente w/ ${cliente.name} id=${cliente.id}`)));
  }

}