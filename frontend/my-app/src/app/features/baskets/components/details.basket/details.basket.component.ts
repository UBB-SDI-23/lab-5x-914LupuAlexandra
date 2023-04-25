import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../../common/services/api.service';
import { Basket } from '../../../models/basket.models';
import { Product } from '../../../models/product.models';

@Component({
  selector: 'app-details.basket',
  templateUrl: './details.basket.component.html',
  styleUrls: ['./details.basket.component.css']
})
export class DetailsBasketComponent implements OnInit{

  basketId?: number;
  basket?: Basket;
  products: Product[] = [];
  constructor(private apiSvc: ApiService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.basketId = params['id']
      this.apiSvc.getBasket(this.basketId!).subscribe((basket: Basket) => {
        this.basket = basket;
        for (let i = 0; i < this.basket.products.length; i++) {
          this.getProduct(this.basket.products[i]);
        }

      })
    });
  }
  getProduct(productId: number) {
    this.apiSvc.getProduct(productId).subscribe((product: Product) => {
      this.products.push(product);
    });
  }


  goToUpdate(productId: number) {
    this.router.navigateByUrl(`baskets/update/${this.basketId}`);

  }

  goToDelete(productId: number) {
    this.router.navigateByUrl(`baskets/delete/${this.basketId}`);
  }

}
