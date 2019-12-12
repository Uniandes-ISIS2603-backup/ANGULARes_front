import { Component } from "@angular/core";
import { CartService } from "../carroCompras.service";
@Component({
selector: "carro-compras-summary",
templateUrl:"carroCompras-summary.component.html"
})
export class CartSummaryComponent {
    constructor(public cartService: CartService) { }

    ngOnInit(): void{
        this.cartService.start();
    }
}