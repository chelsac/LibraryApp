import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { BooksComponent } from './books/books.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewbookComponent } from './newbook/newbook.component';
import { SignupComponent } from './signup/signup.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';

const routes: Routes = [{path:'',component:HomeComponent},
{path:"login",component:LoginComponent},
{path:"signup",component:SignupComponent},
{path:"books",canActivate:[AuthGuard],component:BooksComponent},
{path:"newbook",canActivate:[AuthGuard],component:NewbookComponent},
{path:"update",canActivate:[AuthGuard],component:UpdatebookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
