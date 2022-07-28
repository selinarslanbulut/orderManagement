import {Component, OnInit} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private formBuilder: FormBuilder
  ) {

  }

  registerClick() {
    this.router.navigate(['register']);
  }

  userForm = this.formBuilder.group({
    userName: '',
    password: '',
  });

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      userName: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  disabledCheck(): boolean {
    return this.userForm.invalid;
  }

  loginClick() {
    console.log(this.userForm)
    console.log(this.userForm.valid)
    console.log(this.userForm.get('userName')?.value)
    console.log(this.userForm.get('password')?.value)
    //api çağırıldığında admin ya da user type'ına göre yönlendirme düzenlenecek.
    this.router.navigate(['dashboard']);
  }

}
