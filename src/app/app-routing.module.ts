import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {UserScreenComponent} from "./users/user-screen/user-screen.component";
import {SelectedOfferPageComponent} from "./selected-offer-page/selected-offer-page.component";

const routes: Routes = [
  {path: '', component: LoginComponent, pathMatch: 'full'},
  {path:'register', component: RegisterComponent, pathMatch: 'full'},
  {path: 'login', component: LoginComponent, pathMatch: 'full' },
  {path: 'dashboard', component: UserScreenComponent, pathMatch: 'full' },
  {path: 'selectedOffer', component: SelectedOfferPageComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
