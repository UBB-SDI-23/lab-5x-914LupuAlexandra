import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddBasketDTO, Basket, UpdateBasketDTO } from '../../features/models/basket.models';
import { Product, ProductDTO } from '../../features/models/product.models';
import { User } from '../../features/models/user.models';
//import { ProductDTO, Product } from '../../features/products/component/overview/models/products.models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://ec2-16-171-53-112.eu-north-1.compute.amazonaws.com:80/api/';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get(this.baseUrl + 'products/') as Observable<Product[]>;
  }

  getProduct(productId: number): Observable<Product> {
    return this.http.get(this.baseUrl + 'products/' + productId + '/') as Observable<Product>;

  }

  addProduct(product: ProductDTO): Observable<Product> {
    return this.http.post(this.baseUrl + 'products/', product) as Observable<Product>;
  }

  updateProduct(productId: number, product: ProductDTO): Observable<ProductDTO> {
    return this.http.put(this.baseUrl + 'products/' + productId +'/', product) as Observable<ProductDTO>;
  }

  deleteProduct(productId: number): Observable<ProductDTO> {
    return this.http.delete(this.baseUrl + 'products/' + productId + '/') as Observable<ProductDTO>;
  }

  getFilteredProducts(priceFilter: number): Observable<Product[]> {
    return this.http.get(this.baseUrl + 'products/filter/' + priceFilter) as Observable<Product[]>;
  }


  getBaskets(): Observable<Basket[]> {
    return this.http.get(this.baseUrl + 'baskets/') as Observable<Basket[]>;
  }

  getBasket(basketId: number): Observable<Basket> {
    return this.http.get(this.baseUrl + 'baskets/' + basketId + '/') as Observable<Basket>;
  }

  addBasket(basket: AddBasketDTO): Observable<Basket> {
    return this.http.post(this.baseUrl + 'baskets/', basket) as Observable<Basket>;
  }

  updateBasket(basketId: number, basket: UpdateBasketDTO): Observable<Basket> {
    return this.http.put(this.baseUrl + 'baskets/' + basketId + '/', basket) as Observable<Basket>;
  }

  deleteBasket(basketId: number): Observable<Basket> {
    return this.http.delete(this.baseUrl + 'baskets/' + basketId + '/') as Observable<Basket>;
  }

  getUsers(): Observable<User[]> {
    return this.http.get(this.baseUrl + 'users/') as Observable<User[]>;
  }

  getUser(userId: number): Observable<User> {
    return this.http.get(this.baseUrl + 'users/' + userId + '/') as Observable<User>;
  }
}
