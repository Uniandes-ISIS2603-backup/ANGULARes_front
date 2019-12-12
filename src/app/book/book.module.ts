import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxPermissionsModule} from 'ngx-permissions';

import {BookListComponent} from './book-list/book-list.component';
import {BookReviewComponent} from './book-reviews/book-review.component';
import {BookDetailComponent} from './book-detail/book-detail.component';
import {BookAddReviewComponent} from './book-add-review/book-add-review.component';

import {BookService} from './book.service';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        NgbModule,
        ReactiveFormsModule,
        NgxPermissionsModule
    ],
    declarations: [
        BookListComponent, BookDetailComponent, BookReviewComponent, BookAddReviewComponent
    ],
    providers: [BookService],
    exports: [BookListComponent]
})
export class BookModule {}