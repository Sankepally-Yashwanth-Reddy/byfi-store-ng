import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl = 'https://fakestoreapi.com/products'; // API endpoint

  constructor(private http: HttpClient) { }

  // Fetch products using HttpClient
  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl); // Returns an observable of product data
  }

}
