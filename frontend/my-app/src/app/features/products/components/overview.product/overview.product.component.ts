import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ApiService } from '../../../../common/services/api.service';
import { Product } from '../../../models/product.models';



@Component({
  selector: 'app-overview',
  templateUrl: './overview.product.component.html',
  styleUrls: ['./overview.product.component.css']
})
export class OverviewProductComponent implements OnInit {
  products: Product[] = [];
  priceFilter!: number;
  displayedColumns: string[] = ['id', 'title', 'type', 'color', 'size', 'price'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private apiSvc: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.getProducts();
    this.apiSvc.getProducts().subscribe((result) => {
      this.getProducts();
    });
  }

  getProducts() {
    this.apiSvc.getProducts().subscribe((products: Product[]) => {
      this.dataSource = new MatTableDataSource(products);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      //this.dataSource.sortingDataAccessor = (data: any, sortHeaderId: string): string => {
      //  if (typeof data[sortHeaderId] === 'string') {
      //    return data[sortHeaderId].toLocaleLowerCase();
      //  }

      //  return data[sortHeaderId];
      //};
    })
  }

  goToDetails(productId: string) {
    this.router.navigateByUrl(`products/${productId}`)
  }

  goToAdd() {
    this.router.navigateByUrl(`products/add`)
  }

  filterProducts(priceFilter: number) {
    this.router.navigateByUrl(`products/filter/${priceFilter}`)
  }
}
