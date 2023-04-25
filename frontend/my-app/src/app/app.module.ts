import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
//import { OverviewComponent } from './features/products/component/overview/overview.component';

import { HttpClientModule } from '@angular/common/http';
import { DetailsProductComponent } from './features/products/components/details.product/details.product.component';
//import { AddComponent } from './features/products/add/add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateProductComponent } from './features/products/components/update.product/update.product.component';
import { DeleteProductComponent } from './features/products/components/delete.product/delete.product.component';
import { FilterProductComponent } from './features/products/components/filter.product/filter.product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSortHeader, MatSortModule } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
//import { OverviewComponent } from './features/baskets/component/overview/overview.component';
//import { AddProductComponent } from './features/products/components/add.product/add.product.component';
import { OverviewProductComponent } from './features/products/components/overview.product/overview.product.component';
import { AddProductComponent } from './features/products/components/add.product/add.product.component';
import { OverviewBasketComponent } from './features/baskets/components/overview.basket/overview.basket.component';
import { AddBasketComponent } from './features/baskets/components/add.basket/add.basket.component';
import { DetailsBasketComponent } from './features/baskets/components/details.basket/details.basket.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { DatePipe } from '@angular/common';
import { UpdateBasketComponent } from './features/baskets/components/update.basket/update.basket.component';
import { DeleteBasketComponent } from './features/baskets/components/delete.basket/delete.basket.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OverviewProductComponent,
    DetailsProductComponent,
    AddProductComponent,
    UpdateProductComponent,
    DeleteProductComponent,
    FilterProductComponent,
    OverviewBasketComponent,
    AddBasketComponent,
    DetailsBasketComponent,
    UpdateBasketComponent,
    DeleteBasketComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    ReactiveFormsModule,

  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
