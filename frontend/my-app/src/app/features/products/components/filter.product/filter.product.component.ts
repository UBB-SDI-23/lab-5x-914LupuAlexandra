import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../../common/services/api.service';
import { Product } from '../../../models/product.models';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.product.component.html',
  styleUrls: ['./filter.product.component.css']
})
export class FilterProductComponent implements OnInit {
  products: Product[] = [];
  priceFilter?: number;

  constructor(private apiSvc: ApiService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.priceFilter = params['priceFilter']
      if (this.priceFilter)
      this.apiSvc.getFilteredProducts(this.priceFilter).subscribe((result: Product[]) => {
        this.products = result;
    })
    

    });
  }
}
