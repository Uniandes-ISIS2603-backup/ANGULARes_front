import { Component } from "@angular/core";
import { CartService } from "../carroCompras.service";

@Component({
    selector: "carro-compras-checkout",
    templateUrl:"carroCompras-checkout.component.html"
})
export class CartCheckoutComponent {

    constructor(public cartService: CartService){}

    ngOnInit(): void{
        this.cartService.clear();
    }

}