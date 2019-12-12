import { Book } from "../book/book";

export class Cart{
    public lines: CartLine[] = [];
    public itemCount: number = 0;
    public cartPrice: number = 0;
}

export class CartLine {
    constructor(public book: Book,
    public quantity: number) {}
    get lineTotal() {
        return this.quantity * this.book.precio;
    }
}