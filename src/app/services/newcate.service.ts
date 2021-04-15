import { Injectable } from '@angular/core';
import{new_cate} from'../models/new_cate';
import {HttpClient} from'@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewcateService {
  API_URL = "http://localhost:3000/newcates";
  constructor(private http: HttpClient){}

  all(embed: boolean = true): Observable<new_cate[]>{
    let requestUrl = embed == true ? `${this.API_URL}?_embed=news` : this.API_URL;
    // console.log(requestUrl);
    return this.http.get<new_cate[]>(requestUrl);
  }
  store(data: any): Observable<any>{
    return this.http.post<any>(this.API_URL, data);
  }
  findById(id: any): Observable<new_cate>{
    let API_URL = `${this.API_URL}/${id}/?_embed=news`;
    return this.http.get<new_cate>(API_URL);
  }
  put(obj: new_cate): Observable<any>{
    let API_URL = `${this.API_URL}/${obj.id}`;
    return this.http.put<any>(API_URL, obj);
  }
  delete(id: any): Observable<any>{
    let API_URL = `${this.API_URL}/${id}`;
    return this.http.delete<any>(API_URL);
}

}

