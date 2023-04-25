import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../../common/services/api.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.product.component.html',
  styleUrls: ['./delete.product.component.css']
})
export class DeleteProductComponent implements OnInit {
  productId?: number;

  constructor(private apiSrv: ApiService, private activatedRoute: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.productId = params['id'];
    })
  }

  deleteProduct() {
    if (this.productId) {
      this.apiSrv.deleteProduct(this.productId).subscribe(result => {
        this.router.navigateByUrl(`products`);
      });
      
      alert("Product was deleted")
    }
  }
    cancel() {
      this.router.navigateByUrl(`products/${this.productId}`);
    }
    

}
