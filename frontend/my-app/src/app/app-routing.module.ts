import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './common/home/home.component';
import { AddComponent } from './features/products/add/add.component';
import { OverviewComponent } from './features/products/component/overview/overview.component';
import { DeleteComponent } from './features/products/components/delete/delete.component';
import { DetailsComponent } from './features/products/components/details/details.component';
import { FilterComponent } from './features/products/components/filter/filter.component';
import { UpdateComponent } from './features/products/components/update/update.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "products",
    component: OverviewComponent
  },
  {
    path: "products/add",
    component: AddComponent
  },
  {
    path: "products/update/:id",
    component: UpdateComponent
  },
  {
    path: "products/delete/:id",
    component: DeleteComponent
  },
  {
    path: "products/filter/:priceFilter",
    component: FilterComponent
  },
  {
    path: "products/:id",
    component: DetailsComponent
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
