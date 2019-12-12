import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { ClientService } from './client.service';
import { BookModule } from '../book/book.module';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { ClientBooksComponent } from './client-books/client-books.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,  
    BookModule,
    NgbModule
  ],
  declarations: [ClientDetailComponent, ClientBooksComponent],
  exports : [],
  providers: [ClientService]
})
export class ClientModule { }