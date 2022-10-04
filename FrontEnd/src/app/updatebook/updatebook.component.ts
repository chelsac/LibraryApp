import { Component, OnInit } from '@angular/core';
import { ServicebookService } from '../servicebook.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdatebookComponent implements OnInit {

  book={
    title:"",
    author:"",
    description:"",
    image:""

  };

  constructor(private bookservice:ServicebookService,private router: Router) { }

  ngOnInit(): void {
    var bookId= localStorage.getItem("editBookId");
    this.bookservice.geteditBook(bookId).subscribe((data:any)=>{
      this.book=JSON.parse(JSON.stringify(data));
  })

  }

  update(){
    this.bookservice.updateBook(this.book);
    alert("Book Updated");
    console.log(this.book);
    location.pathname = ('/books');
  }

}
