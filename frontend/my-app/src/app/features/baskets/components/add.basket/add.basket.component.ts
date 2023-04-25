import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../../common/services/api.service';
import { AddBasketDTO, Basket } from '../../../models/basket.models';
import { User } from '../../../models/user.models';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-add.basket',
  templateUrl: './add.basket.component.html',
  styleUrls: ['./add.basket.component.css']
})
export class AddBasketComponent{
  date!: string | null;
  discount_code?: string;
  basket?: Basket;
  users: User[] = [];
  selectedUser?: number;
  selectedDate?: Date;

  constructor(private apiSvc: ApiService, private router: Router, private datePipe: DatePipe) {
    this.apiSvc.getUsers().subscribe((result) => {
      this.users = result;
    })
  }

  addBasket() {
    this.date = this.datePipe.transform(this.selectedDate, "yyyy-MM-dd");
    if (this.selectedUser && this.discount_code && this.date) {
      const basket: AddBasketDTO = {
        user: this.selectedUser,
        date: this.date,
        discount_code: this.discount_code
      }
      console.log(basket);
      this.apiSvc.addBasket(basket).subscribe((result: Basket) => {
        console.log(basket);
            this.router.navigateByUrl('baskets');
          },
            (err) => { console.log(err) }
          );
        }
    }
}
