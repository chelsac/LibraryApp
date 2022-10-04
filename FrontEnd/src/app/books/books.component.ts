import { Component, OnInit } from '@angular/core';
import { ServicebookService } from '../servicebook.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books=[{
    title:"",
    author:"",
    description:"",
    image:""

  }];
  constructor(private bookservice:ServicebookService,private router: Router ) { }

  ngOnInit(): void {

    this.bookservice.getBook().subscribe((data)=>{
      this.books=JSON.parse(JSON.stringify(data));
      console.log(this.books);
    })

  }


  delete(data:any){
    this.bookservice.deleteBook(data._id).subscribe((datas)=>{
      console.log(datas);
    })
    alert("Book Deleted");
    location.pathname = ('/books');
  }

  editBook(book:any){
      localStorage.setItem("editBookId", book._id.toString());
      location.pathname = ('/update');
  }

}
