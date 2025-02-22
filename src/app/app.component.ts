import {Component, OnInit} from '@angular/core';
import { AuthService } from './auth/auth.service';
import {CartService} from './carroCompras/carroCompras.service';
import {Book} from './book/book';

/**
 * The app component. This component is the base of the BookStore
 */
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    /**
     * The title that appears on the NavBar and the web browser
     */
    title: String;

    /**
     * Assigns a title to the web page
     */
    ngOnInit(): void {
        this.title = "Libros Angulares";
        this.authService.start();
        this.cartService.start();
    }


       /**
     * @ignore
     */
    constructor(private authService: AuthService, private cartService: CartService) { }

    logout(): void {
        this.authService.logout()
    }

}