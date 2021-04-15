import { Injectable } from '@angular/core';
import{new_paper} from'../models/new_paper';
import {HttpClient} from'@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  API_URL = "http://localhost:3000/news";
  constructor(private http: HttpClient){}

  all(embed: boolean = true): Observable<new_paper[]>{
    let requestUrl = embed == true ? `${this.API_URL}?_expand=newcate` : this.API_URL;
    // console.log(requestUrl);
    return this.http.get<new_paper[]>(requestUrl);
  }
  store(data: any): Observable<any>{
    return this.http.post<any>(this.API_URL, data);
  }
  findById(id: any): Observable<new_paper>{
    let API_URL = `${this.API_URL}/${id}/?_expand=newcate`;
    return this.http.get<new_paper>(API_URL);
  }
  put(obj: new_paper): Observable<any>{
    let API_URL = `${this.API_URL}/${obj.id}`;
    return this.http.put<any>(API_URL, obj);
  }
  delete(id: any): Observable<any>{
    let API_URL = `${this.API_URL}/${id}`;
    return this.http.delete<any>(API_URL);
}
getAll(filter: any): Observable<any>{
  let requestApi = this.API_URL + "?_expand=newcate";
  switch(filter.orderBy){
    case "1":
      requestApi += `&_sort=date&_order=desc`;
      break;
    case "2":
      requestApi += `&_sort=date&_order=asc`;
      break;
  }

  if(filter.keyword.length > 0){
    requestApi += `&name_like=${filter.keyword}`;
  }

 if(filter.newcate!=""){
  requestApi += `&newcateId=${filter.newcate}`;
 }

  return this.http.get<any>(requestApi);
}
findcateId(id:any){
console.log(id);
let API_URL = `${this.API_URL}?_expand=newcate&_sort=date&_order=desc`;
if(id>0){
 API_URL = `${this.API_URL}?_expand=newcate&newcateId=${id}`;
}

  return this.http.get<new_paper>(API_URL);
}

}
