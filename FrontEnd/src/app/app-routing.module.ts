import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewbookComponent } from './newbook/newbook.component';
import { SignupComponent } from './signup/signup.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';

const routes: Routes = [{path:'',component:HomeComponent},
{path:"login",component:LoginComponent},
{path:"signup",component:SignupComponent},
{path:"books",component:BooksComponent},
{path:"newbook",component:NewbookComponent},
{path:"update",component:UpdatebookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
