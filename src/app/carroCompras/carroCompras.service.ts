import { Injectable } from "@angular/core";
import {Cart} from "./carroCompras";
import { Book } from "../book/book";
import { CartLine } from "./carroCompras";

@Injectable()
export class CartService {

    
    public cart: Cart=new Cart;

    start(): void{
        let c=localStorage.getItem('cart');
        if(!c){
            this.cart=new Cart;
            localStorage.setItem('cart',JSON.stringify(this.cart));
        }
        else{
            this.cart=JSON.parse(c);
        } 
    }

    addLine(book: Book, quantity: number = 1) {
        let line = this.cart.lines.find(line => line.book.id == book.id);
        if (line != undefined) {
            line.quantity += quantity;
        } else {
            this.cart.lines.push(new CartLine(book, quantity));
        }
        this.recalculate();
        localStorage.setItem('cart',JSON.stringify(this.cart));
    }
    updateQuantity(book: Book, quantity: number) {
        let line = this.cart.lines.find(line => line.book.id == book.id);
        if (line != undefined) {
            line.quantity = Number(quantity);
        }
        this.recalculate();
        localStorage.setItem('cart',JSON.stringify(this.cart));
    }
    removeLine(id: number) {
        let index = this.cart.lines.findIndex(line => line.book.id == id);
        this.cart.lines.splice(index, 1);
        this.recalculate();
        localStorage.setItem('cart',JSON.stringify(this.cart));
    }
    clear() {
        this.cart.lines = [];
        this.cart.itemCount = 0;
        this.cart.cartPrice = 0;
        localStorage.setItem('cart',JSON.stringify(this.cart));
    }
    private recalculate() {
        this.cart.itemCount = 0;
        this.cart.cartPrice = 0;
        this.cart.lines.forEach(l => {
            this.cart.itemCount += l.quantity;
            this.cart.cartPrice += (l.quantity * l.book.precio);
        })
    }
}
