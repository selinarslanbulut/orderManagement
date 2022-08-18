import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserScreenComponent } from './users/user-screen/user-screen.component';
import { AdminScreenComponent } from './users/admin-screen/admin-screen.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { StateClass } from '@ngxs/store/internals';
import {NgxsModule} from "@ngxs/store";
import {UserState} from "../../libs/states/user.state";
import {environment} from "../environments/environment";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import { SelectedOfferPageComponent } from './selected-offer-page/selected-offer-page.component';
import {OfferState} from "../../libs/states/offer.state";
import {Offer} from "../../libs/models/offer";
import {SelectedOfferState} from "../../libs/states/selectedOffer.state";

//const STATES: StateClass<any>[] | undefined = [UserState]
const STATES = [UserState, OfferState, SelectedOfferState]

const appRoutes:Routes =[
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },



]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserScreenComponent,
    AdminScreenComponent,
    SelectedOfferPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    RouterModule.forRoot(appRoutes),
    MatCheckboxModule,
    NgxsModule.forFeature(STATES),
    NgxsModule.forRoot([UserState, OfferState,SelectedOfferState], {
      developmentMode: !environment.production
    }),
  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
