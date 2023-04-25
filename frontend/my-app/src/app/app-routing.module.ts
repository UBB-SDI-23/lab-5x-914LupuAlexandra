import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DeleteProductComponent } from './features/products/components/delete.product/delete.product.component';
import { DetailsProductComponent } from './features/products/components/details.product/details.product.component';
import { FilterProductComponent } from './features/products/components/filter.product/filter.product.component';
import { UpdateProductComponent } from './features/products/components/update.product/update.product.component';
import { AddProductComponent } from './features/products/components/add.product/add.product.component';
import { OverviewProductComponent } from './features/products/components/overview.product/overview.product.component';
import { OverviewBasketComponent } from './features/baskets/components/overview.basket/overview.basket.component';
import { AddBasketComponent } from './features/baskets/components/add.basket/add.basket.component';
import { DetailsBasketComponent } from './features/baskets/components/details.basket/details.basket.component';
import { DeleteBasketComponent } from './features/baskets/components/delete.basket/delete.basket.component';
import { UpdateBasketComponent } from './features/baskets/components/update.basket/update.basket.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "products",
    component: OverviewProductComponent
  },
  {
    path: "products/add",
    component: AddProductComponent
  },
  {
    path: "products/update/:id",
    component: UpdateProductComponent
  },
  {
    path: "products/delete/:id",
    component: DeleteProductComponent
  },
  {
    path: "products/filter/:priceFilter",
    component: FilterProductComponent
  },
  {
    path: "products/:id",
    component: DetailsProductComponent
  },
  {
    path: "baskets",
    component: OverviewBasketComponent
  },
  {
    path: "baskets/add",
    component: AddBasketComponent
  },
  {
    path: "baskets/update/:id",
    component: UpdateBasketComponent
  },
  {
    path: "baskets/delete/:id",
    component: DeleteBasketComponent
  },
  {
    path: "baskets/:id",
    component: DetailsBasketComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
