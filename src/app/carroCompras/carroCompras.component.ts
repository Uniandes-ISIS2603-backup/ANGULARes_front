import { Component } from "@angular/core";
import { CartService } from "./carroCompras.service";
@Component({
selector: "carro-compras",
templateUrl:"carroCompras.component.html"
})
export class CartComponent {
constructor(public cartService: CartService) { }
}