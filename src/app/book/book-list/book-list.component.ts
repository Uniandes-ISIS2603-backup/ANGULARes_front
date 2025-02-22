import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/filter';


import {Book} from '../../book/book';
import {BookService} from '../../book/book.service';
@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

    /**
    * The list of books to display
    */
    @Input() books: Book[];

    bestsellerFilter: boolean=false;
    nuevoFilter: boolean=false;
    descuentoFilter:boolean=false;

    /**
    * The component's constructor
    */
    constructor(private bookService: BookService, private route: ActivatedRoute) {}

    allbooks: string = 'no';
    /**
    * This method retrieves all the books in the Bookstore to show them in the list
    */
    getBooks(): void {
        this.bookService.getBooks()
            .subscribe(books => {
                this.books = books;
            });
    }

    getFilteredBooks(): Book[]{
        let filteredBooks:Book[]=this.books;
        if(this.bestsellerFilter==true){
            filteredBooks=filteredBooks.filter(b => b.bestSeller);
        }
        if(this.nuevoFilter==true){
            filteredBooks=filteredBooks.filter(b => b.esNuevo);
        }
        if(this.descuentoFilter==true){
            filteredBooks=filteredBooks.filter(b => b.esDescuento);
        }
        return filteredBooks;
    }

    /**
    * The method which initializes the component
    */
    ngOnInit() {
        this.route.queryParams
            .filter(params => params.allbooks)
            .subscribe(params => {
                console.log(params);

                this.allbooks = params.allbooks;
                console.log(this.allbooks);
            });
        if (this.allbooks == 'yes') {
            console.log("allbooks");

            this.getBooks();
        }
    }

}