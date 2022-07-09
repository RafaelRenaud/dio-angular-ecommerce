import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from '../model/Book';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  private url = "https://localhost:44382/api/bookstore";

  private header = {
    Headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  }

  constructor(
    private http: HttpClient) {}

  getBook(){
    return this.http.get(this.url);
  }
}
