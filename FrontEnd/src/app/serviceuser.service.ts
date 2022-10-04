import { Injectable } from '@angular/core';
import{ HttpClient } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceuserService {

  constructor(private http:HttpClient) { }

  addusers(data:any){
    return this.http.post<any>("http://localhost:3000/adduser",data);
  }
}
