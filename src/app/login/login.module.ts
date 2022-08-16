import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from "./login.component";
import {RouterModule} from "@angular/router";

export const loginRouting =[
  {path: '', component: LoginComponent, pathMatch: 'full'}
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(loginRouting)
  ],
  exports: [RouterModule],
  //declarations: [LoginComponent],
  providers: [],

})
export class LoginModule { }
