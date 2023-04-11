import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../../common/services.api.service.service';
import { Product } from '../../component/overview/models/products.models';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  products: Product[] = [];
  priceFilter?: string;

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
