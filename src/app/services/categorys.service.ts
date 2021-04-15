
import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http';
import { Observable } from 'rxjs';
import{categories} from'../models/categories';


@Injectable({
  providedIn: 'root'
})
export class CategorysService {
  API_URL = "http://localhost:3000/categories";
  constructor(private http: HttpClient){}
  
 
  all(embed: boolean = true): Observable<categories[]>{
    let requestUrl = embed == true ? `${this.API_URL}?_embed=products` : this.API_URL;
    // console.log(requestUrl);
    return this.http.get<categories[]>(requestUrl);


    // let requestUrl = this.API_URL;
    // if(embed) requestUrl += '?_embed=products';
    // console.log(requestUrl);
    // return this.http.get<categories[]>(this.API_URL);
  }
  store(data: any): Observable<any>{
    return this.http.post<any>(this.API_URL, data);
  }
  findById(id: any): Observable<categories>{
    let API_URL = `${this.API_URL}/${id}/?_embed=products`;
    return this.http.get<categories>(API_URL);
  }
  put(obj: categories): Observable<any>{
    let API_URL = `${this.API_URL}/${obj.id}`;
    return this.http.put<any>(API_URL, obj);
  }
  delete(id: any): Observable<any>{
    let API_URL = `${this.API_URL}/${id}`;
    return this.http.delete<any>(API_URL);
}}
