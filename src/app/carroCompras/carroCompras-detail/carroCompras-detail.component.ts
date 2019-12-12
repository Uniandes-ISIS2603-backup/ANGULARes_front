import { Component } from "@angular/core";
import { CartService } from "../carroCompras.service";

@Component({
    selector: "carro-compras-detail",
    templateUrl:"carroCompras-detail.component.html"
})
export class CartDetailComponent {

    constructor(public cartService: CartService){}

    ngOnInit(): void{
        this.cartService.start();
    }

}