import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  URI:string = 'https://jsonplaceholder.typicode.com/';
  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get<any[]>(`${this.URI}users`).toPromise();
  }
  getPosts(){
    return this.http.get<any[]>(`${this.URI}posts`).toPromise();
  }
}
