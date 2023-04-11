import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ApiService } from '../../../../common/services.api.service.service';
import { Product } from '../../component/overview/models/products.models';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  productId?: string;
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
  goToUpdate(productId: string) {
    this.router.navigateByUrl(`products/update/${this.productId}`);

  }

  goToDelete(productId: string) {
    this.router.navigateByUrl(`products/delete/${this.productId}`);
  }

}
