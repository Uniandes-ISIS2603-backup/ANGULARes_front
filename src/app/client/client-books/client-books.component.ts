import { Component, OnInit, Input, } from '@angular/core';
import { Book } from '../book';

@Component({
    selector: 'app-client-books',
    templateUrl: './client-books.component.html',
})
export class ClientBooksComponent implements OnInit {

    @Input() books : Book [];
    
    public isCollapsed = false;
    
    /**
     * The function called when a review is posted to update the reviews
     */
    updateBooks(newBooks:Book[]): void {
        this.books = newBooks;
    }
    
    ngOnInit(){
    }
}