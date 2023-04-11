import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './common/home/home.component';
import { OverviewComponent } from './features/products/component/overview/overview.component';

import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './features/products/components/details/details.component';
import { AddComponent } from './features/products/add/add.component';
import { FormsModule } from '@angular/forms';
import { UpdateComponent } from './features/products/components/update/update.component';
import { DeleteComponent } from './features/products/components/delete/delete.component';
import { FilterComponent } from './features/products/components/filter/filter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSortHeader, MatSortModule } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OverviewComponent,
    DetailsComponent,
    AddComponent,
    UpdateComponent,
    DeleteComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
