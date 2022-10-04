import { Component, OnInit } from '@angular/core';
import { ServiceuserService } from '../serviceuser.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  User={username:'',
    email:'',
  password:''}

userVerify(){
  console.log(this.User);
  this.userservice.addusers(this.User)
  .subscribe((res)=>{
    alert("User Successfully added");
    location.pathname = ('/login');
  });

}
  constructor(private userservice:ServiceuserService,private router: Router ) { }

  ngOnInit(): void {
  }

}
