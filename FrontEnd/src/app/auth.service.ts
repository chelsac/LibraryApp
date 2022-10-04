import { Injectable } from '@angular/core';
import{ HttpClient } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  loginUser(data:any){
    return this.http.post<any>("http://localhost:3000/login",data);
  }

  loggedin(){
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }

}
