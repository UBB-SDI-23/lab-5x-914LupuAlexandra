import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../../common/services/api.service';

@Component({
  selector: 'app-delete.basket',
  templateUrl: './delete.basket.component.html',
  styleUrls: ['./delete.basket.component.css']
})
export class DeleteBasketComponent implements OnInit {
  basketId?: number;

  constructor(private apiSrv: ApiService, private activatedRoute: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.basketId = params['id'];
    })
  }

  deleteBasket() {
    if (this.basketId) {
      this.apiSrv.deleteBasket(this.basketId).subscribe(result => {
        this.router.navigateByUrl(`baskets`);
      });

      alert("Basket was deleted")
    }
  }
  cancel() {
    this.router.navigateByUrl(`baskets/${this.basketId}`);
  }

}
