import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  //örnek şifre : 12qw!"QW12
  private passwordRegex = /^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d)(?=\S*[^\w\s])\S{8,}$/;

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
      password: [
        null,
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(12),
          //Validators.pattern(this.passwordRegex), // şifreyi doğrulayabilmek için.
          Validators.compose([
            Validators.pattern("^(?=\\S*[a-z])(?=\\S*[A-Z])(?=\\S*\\d)(?=\\S*[^\\w\\s])\\S{8,}$")
          ])
        ],
      ],
      confirmPassword: [null, Validators.required],
      userType:[null, Validators.required],
    });
  }

  registerClick(){
    console.log(this.registerForm.get("userType"));
    this.router.navigate(['login']);
  }
}
