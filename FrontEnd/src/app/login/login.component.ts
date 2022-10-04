import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  User={email:'',
        password:''}

  loginUser(){
    this.authservice.loginUser(this.User)
    .subscribe({
      next: (res) => {
        localStorage.setItem('token',res.token)
        location.pathname = ('/books');
      },
      error: (err) => alert(err.error),
      complete: () => console.info('complete') 
    }
    );
  }

  constructor(private authservice:AuthService,private router: Router ) { }

  ngOnInit(): void {
  }

}
