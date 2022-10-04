import { Injectable } from '@angular/core';
import{ HttpClient } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicebookService {

  constructor(private http:HttpClient) { }

  addbooks(data:any){
    return this.http.post<any>("http://localhost:3000/addbook",data);
  }

  getBook(){
    return this.http.get('http://localhost:3000/books');
  }
  geteditBook(_id:any){

    return this.http.get('http://localhost:3000/'+_id);
  }
  
  deleteBook(id:any){
    console.log(id);
    return this.http.delete('http://localhost:3000/delete/'+id);
  }

  updateBook(book:any){
    console.log(book);
    return this.http.put('http://localhost:3000/edit', {book})
    .subscribe(data=> {console.log(data)})
  }

  
}
