import { Component, OnInit } from '@angular/core';

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
alert("User Successfully added");
}
  constructor() { }

  ngOnInit(): void {
  }

}
