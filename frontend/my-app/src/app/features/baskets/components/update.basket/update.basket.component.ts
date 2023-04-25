import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../../common/services/api.service';
import { Basket, UpdateBasketDTO } from '../../../models/basket.models';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-update.basket',
  templateUrl: './update.basket.component.html',
  styleUrls: ['./update.basket.component.css']
})
export class UpdateBasketComponent {
  basketId?: number;
  date!: Date;
  discount_code?: string;
  selectedDate?: Date;
  updatedDate!: string | null;

  constructor(private apiSvc: ApiService, private activatedRoute: ActivatedRoute, private router: Router, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.basketId = params['id']
      this.apiSvc.getBasket(this.basketId!).subscribe((basket: Basket) => {
        this.date = basket.date;
        this.discount_code = basket.discount_code;
      })
    })
  };

  updateBasket() {
    if (this.selectedDate)
      this.updatedDate = this.datePipe.transform(this.selectedDate, "yyyy-MM-dd");
    else
      this.updatedDate = this.datePipe.transform(this.date, "yyyy-MM-dd");
    if (this.updatedDate && this.discount_code && this.basketId) {
      const basket: UpdateBasketDTO = {
        date: this.updatedDate,
        discount_code: this.discount_code
      }
      this.apiSvc.updateBasket(this.basketId, basket).subscribe((result: Basket) => {
        this.router.navigateByUrl('baskets');
      });
      alert("Basket was updated")
    }
  }

}
