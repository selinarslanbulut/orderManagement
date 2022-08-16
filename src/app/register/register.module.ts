import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {RegisterComponent} from "./register.component";

export const registerRouting =[
  { path: '', component: RegisterComponent, pathMatch: 'full'}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(registerRouting)
  ],
  exports: [RouterModule],
  //declarations:[RegisterComponent],
  providers:[],
})
export class RegisterModule { }
