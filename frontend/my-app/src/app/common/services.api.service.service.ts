import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDTO, Product } from '../features/products/component/overview/models/products.models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://ec2-13-49-221-23.eu-north-1.compute.amazonaws.com:8000/api/';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get(this.baseUrl + 'products/') as Observable<Product[]>;
  }

  getProduct(productId: string): Observable<Product> {
    return this.http.get(this.baseUrl + 'products/' + productId + '/') as Observable<Product>;

  }

  addProduct(product: ProductDTO): Observable<Product> {
    return this.http.post(this.baseUrl + 'products/', product) as Observable<Product>;
  }

  updateProduct(productId: string, product: ProductDTO): Observable<ProductDTO> {
    return this.http.put(this.baseUrl + 'products/' + productId +'/', product) as Observable<ProductDTO>;
  }

  deleteProduct(productId: string): Observable<ProductDTO> {
    return this.http.delete(this.baseUrl + 'products/' + productId + '/') as Observable<ProductDTO>;
  }

  getFilteredProducts(priceFilter:string): Observable<Product[]> {
    return this.http.get(this.baseUrl + 'products/filter/' + priceFilter) as Observable<Product[]>;
  }
}
