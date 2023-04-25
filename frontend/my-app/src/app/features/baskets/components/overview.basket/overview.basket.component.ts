import { OnInit, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, _MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ApiService } from '../../../../common/services/api.service';
import { Basket } from '../../../models/basket.models';

@Component({
  selector: 'app-overview.basket',
  templateUrl: './overview.basket.component.html',
  styleUrls: ['./overview.basket.component.css']
})
export class OverviewBasketComponent implements OnInit {

  baskets: Basket[] = [];
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'price', 'number_products', 'date', 'discount_code'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private apiSvc: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.getBaskets();
    this.apiSvc.getBaskets().subscribe((result) => {
      this.getBaskets();
    })
  }

  getBaskets() {
    this.apiSvc.getBaskets().subscribe((baskets: Basket[]) => {
      this.dataSource = new MatTableDataSource(baskets);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
  }

  goToDetails(basketId: number) {
    this.router.navigateByUrl(`baskets/${basketId}`)
  }

  goToAdd() {
    this.router.navigateByUrl(`baskets/add`)
  }
}
