import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {UserScreenComponent} from "./users/user-screen/user-screen.component";

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent },
  {path: 'dashboard', component: UserScreenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
