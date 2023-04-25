import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../../common/services/api.service';
import { Basket } from '../../../models/basket.models';
import { Product, ProductDTO } from '../../../models/product.models';


@Component({
  selector: 'app-update',
  templateUrl: './update.product.component.html',
  styleUrls: ['./update.product.component.css']
})
export class UpdateProductComponent implements OnInit{
  productId?: number;
  title?: string;
  type?: string;
  color?: string;
  price?: number;
  size?: string;

  constructor(private apiSvc: ApiService, private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.productId = params['id']
      this.apiSvc.getProduct(this.productId!).subscribe((product: Product) => {
        this.title = product.title;
        this.type = product.type;
        this.color = product.color;
        this.price = product.price;
        this.size = product.size;

      })
    })
  };

  updateProduct() {
    if (this.title && this.type && this.color && this.price && this.size && this.productId) {
      const product: ProductDTO = {
        title: this.title,
        type: this.type,
        color: this.color,
        price: this.price,
        size: this.size,
      }
      this.apiSvc.updateProduct(this.productId, product).subscribe((result: ProductDTO) => {
        this.router.navigateByUrl('products');
      });
      alert("Product was updated")
    }
  }



}
