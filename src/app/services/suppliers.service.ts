import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http';
import { Observable } from 'rxjs';
import{suppliers} from'../models/suppliers';

@Injectable({
  providedIn: 'root'
})
export class SuppliersService {
  API_URL = "http://localhost:3000/suppliers";
  constructor(private http: HttpClient){}
  
 
  all(embed: boolean = true): Observable<suppliers[]>{
    let requestUrl = this.API_URL;
    if(embed) requestUrl += '?_embed=products';
    return this.http.get<suppliers[]>(requestUrl);
  }
  store(data: any): Observable<any>{
    return this.http.post<any>(this.API_URL, data);
  }
  findById(id: any): Observable<suppliers>{
    let API_URL = `${this.API_URL}/${id}/?_embed=products`;
    return this.http.get<suppliers>(API_URL);
  }
  put(obj: suppliers): Observable<any>{
    let API_URL = `${this.API_URL}/${obj.id}`;
    return this.http.put<any>(API_URL, obj);
  }
  delete(id: any): Observable<any>{
    let API_URL = `${this.API_URL}/${id}`;
    return this.http.delete<any>(API_URL);
}}
