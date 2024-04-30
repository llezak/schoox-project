import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const PRODUCT_API = 'https://dummyjson.com/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient : HttpClient) { }



  public getProducts(): Observable<any> {
    return this.httpClient.get<any>(PRODUCT_API + '?limit=10');
}


}
