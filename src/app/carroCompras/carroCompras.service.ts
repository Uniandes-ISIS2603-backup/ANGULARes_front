import { Injectable } from "@angular/core";
import {Cart} from "./carroCompras";
import { Book } from "../book/book";
import { CartLine } from "./carroCompras";

@Injectable()
export class CartService {

    
    public cart: Cart;

    addLine(book: Book, quantity: number = 1) {
        let line = this.cart.lines.find(line => line.book.id == book.id);
        if (line != undefined) {
            line.quantity += quantity;
        } else {
            this.cart.lines.push(new CartLine(book, quantity));
        }
        this.recalculate();
    }
    updateQuantity(book: Book, quantity: number) {
        let line = this.cart.lines.find(line => line.book.id == book.id);
        if (line != undefined) {
            line.quantity = Number(quantity);
        }
        this.recalculate();
    }
    removeLine(id: number) {
        let index = this.cart.lines.findIndex(line => line.book.id == id);
        this.cart.lines.splice(index, 1);
        this.recalculate();
    }
    clear() {
        this.cart.lines = [];
        this.cart.itemCount = 0;
        this.cart.cartPrice = 0;
    }
    private recalculate() {
        this.cart.itemCount = 0;
        this.cart.cartPrice = 0;
        this.cart.lines.forEach(l => {
            this.cart.itemCount += l.quantity;
            this.cart.cartPrice += (l.quantity * l.book.price);
        })
    }
}
