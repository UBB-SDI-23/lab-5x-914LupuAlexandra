import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ApiService } from '../../../../common/services/api.service';
import { Product } from '../../../models/product.models';

@Component({
  selector: 'app-details',
  templateUrl: './details.product.component.html',
  styleUrls: ['./details.product.component.css']
})
export class DetailsProductComponent implements OnInit{
  productId?: number;
  product?: Product;
  constructor(private apiSvc: ApiService, private activatedRoute: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.productId = params['id']
      this.apiSvc.getProduct(this.productId!).subscribe((product: Product) => {
        this.product = product;

      })
    });
    
  }
  goToUpdate(productId: number) {
    this.router.navigateByUrl(`products/update/${this.productId}`);

  }

  goToDelete(productId: number) {
    this.router.navigateByUrl(`products/delete/${this.productId}`);
  }

}
