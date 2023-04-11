import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../common/services.api.service.service';
import { ProductDTO, Product } from '../component/overview/models/products.models';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
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
        size: this.size
      }
      this.apiSvc.addProduct(product).subscribe((result: Product) => {
        this.router.navigateByUrl('products');
      },
        (err) => {console.log(err)}
      );
    }
    
  }
}
