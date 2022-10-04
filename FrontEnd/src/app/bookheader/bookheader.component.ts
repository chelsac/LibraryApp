import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-bookheader',
  templateUrl: './bookheader.component.html',
  styleUrls: ['./bookheader.component.css']
})
export class BookheaderComponent implements OnInit {

  constructor(private authservice:AuthService,private router: Router ) { }

  ngOnInit(): void {
  }

  logoutUser(){
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }

}
