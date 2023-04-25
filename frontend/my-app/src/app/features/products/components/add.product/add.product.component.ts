import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../../common/services/api.service';
import { Product, ProductDTO } from '../../../models/product.models';

@Component({
  selector: 'app-add',
  templateUrl: './add.product.component.html',
  styleUrls: ['./add.product.component.css']
})
export class AddProductComponent {
  title?: string;
  type?: string;
  color?: string;
  price?: number;
  size?: string;
  product?: Product;

  constructor(private apiSvc: ApiService, private router: Router) {}
  addProduct() {
    if (this.title && this.type && this.color && this.price && this.size) {
      const product: ProductDTO = {
        title: this.title,
        type: this.type,
        color: this.color,
        price: this.price,
        size: this.size,
      }
      this.apiSvc.addProduct(product).subscribe((result: Product) => {
        this.router.navigateByUrl('products');
      },
        (err) => {console.log(err)}
      );
    }
    
  }
}
