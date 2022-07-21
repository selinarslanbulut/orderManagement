import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // bir büyük harf, bir küçük harf ve bir sayı veya özel karakter olmak üzere sekiz karakter
  private passwordRegex = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"/;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder
    ) { }

  registerForm = this.formBuilder.group({
    userName: '',
    password: '',
    confirmPassword: '',
  });

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      userName: [null, Validators.required],
      password: [null, Validators.required],
      confirmPassword: [null, Validators.required],
      userType:[null, Validators.required],
      passwordRegex: Validators.pattern(this.passwordRegex),

    });
  }

  registerClick(){
    console.log(this.registerForm.get("userType"))
    this.router.navigate(['login']);

  }

}
