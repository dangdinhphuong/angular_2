import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http';
import { Observable } from 'rxjs';
import{Products} from'../models/products';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  API_URL = "http://localhost:3000/products";
  constructor(private http: HttpClient){}
  
 
  all(embed: boolean = true): Observable<Products[]>{
    let requestUrl = this.API_URL;
    if(embed) requestUrl += '?_expand=category&_expand=supplier';
    return this.http.get<Products[]>(requestUrl);
  }
  store(data: any){
    return this.http.post<any>(this.API_URL, data);
  }
  findById(id: Number){
    let requetsApi=`${this.API_URL}/${id}?_expand=category&_expand=supplier`;
    // console.log(API_URL);
    return this.http.get<any>(requetsApi);
  }
  put(obj: Products): Observable<any>{
    let API_URL = `${this.API_URL}/${obj.id}`;
    return this.http.put<any>(API_URL, obj);
  }
  delete(id: any): Observable<any>{
    let API_URL = `${this.API_URL}/${id}`;
    return this.http.delete<any>(API_URL);
}
getAll(filter: any): Observable<any>{
  let requestApi = this.API_URL + "?_expand=category&_expand=supplier";
  switch(filter.orderBy){
    case "1":
      requestApi += `&_sort=price&_order=asc`;
      break;
    case "2":
      requestApi += `&_sort=price&_order=desc`;
      break;
    case "3":
      requestApi += `&_sort=name&_order=asc`;
      break;
    case "4":
      requestApi += `&_sort=name&_order=desc`;
      break;
  }

  if(filter.keyword.length > 0){
    requestApi += `&name_like=${filter.keyword}`;
  }
 if(filter.categories!=""){
  requestApi += `&categoryId=${filter.categories}`;
 }
 if(filter.supplier!=""){
  requestApi += `&supplierId=${filter.supplier}`;
 }

  return this.http.get<any>(requestApi);
}
SaleLimit(embed: boolean = true): Observable<Products[]>{
  let requestUrl = this.API_URL;
  if(embed) requestUrl += '?_expand=categoryr&_sort=sale&_order=desc&_start=0&_end=3';
  return this.http.get<Products[]>(requestUrl);
}
DateLimit(embed: boolean = true): Observable<Products[]>{
  let requestUrl = this.API_URL;
  if(embed) requestUrl += '?_expand=categoryr&_sort=date&_order=desc&_start=0&_end=3';
  return this.http.get<Products[]>(requestUrl);
}
}
