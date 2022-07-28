import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserScreenComponent } from './users/user-screen/user-screen.component';
import { AdminScreenComponent } from './users/admin-screen/admin-screen.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { StateClass } from '@ngxs/store/internals';

const STATES: StateClass<any>[] | undefined = []
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserScreenComponent,
    AdminScreenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatCheckboxModule,
    NgxsModule.forFeature(STATES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
