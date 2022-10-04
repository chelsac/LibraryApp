import { Component, OnInit } from '@angular/core';
import { ServicebookService } from '../servicebook.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newbook',
  templateUrl: './newbook.component.html',
  styleUrls: ['./newbook.component.css']
})
export class NewbookComponent implements OnInit {
  book={
    title:"",
    author:"",
    description:"",
    image:""

  }
  addnewbook(){
    console.log(this.book);
    this.bookservice.addbooks(this.book)
    .subscribe((res)=>{
      alert("Book Successfully Added");
      location.pathname = ('/books');
    });

  }
  constructor(private bookservice:ServicebookService,private router: Router ) { }

  ngOnInit(): void {
  }

}
