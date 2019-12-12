import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ClientService } from '../client.service';
import { Client } from '../client';
import { ClientDetail } from '../client-detail';
import { ClientBooksComponent } from '../client-books/client-books.component';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html'
})
export class ClientDetailComponent implements OnInit {

 
  constructor(
    private clienteService : ClientService,
    private route : ActivatedRoute
  ) { }

  clienteDetail : ClientDetail;

  @Input() clienteId : Number;


  @ViewChild(ClientBooksComponent) bookListComponent: ClientBooksComponent;


  loader: any;

  toggleBooks(): void {
    
    this.bookListComponent.isCollapsed = !this.bookListComponent.isCollapsed;
}

updateBooks(): void {
  this.getClienteDetail();
  this.bookListComponent.updateBooks(this.clienteDetail.books);
  this.bookListComponent.isCollapsed = false;
}

  getClienteDetail(): void{
  this.clienteService.getClienteDetail(this.clienteId)
  .subscribe( o => {
     this.clienteDetail = o
  });
}

onLoad(params) {

  this.clienteId = params['id'];
  console.log(" en detail " + this.clienteId);
  this.clienteDetail = new ClientDetail();
  this.getClienteDetail();
}

ngOnInit() {
  this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
 }

}