import {Component, OnInit} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {Router} from '@angular/router';
import {Store} from "@ngxs/store";
import {InquireUser} from "../../../libs/actions/user.action";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private store: Store
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
    console.log(55);
    this.userForm = this.formBuilder.group({
      userName: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  disabledCheck(): boolean {
    return this.userForm.invalid;
  }

  loginClick() {
    //apinin payload ı için request
    const userLoginRequest= {
      userName: this.userForm.get('userName')?.value,
      password: this.userForm.get('password')?.value
    };
    console.log(this.userForm)
    console.log(this.userForm.valid)
    console.log(this.userForm.get('userName')?.value)
    console.log(this.userForm.get('password')?.value)
    //api çağırıldığında admin ya da user type'ına göre yönlendirme düzenlenecek.
    //this.router.navigate(['dashboard']);

    //api çağırımı
    console.log(12312312);
    this.store.dispatch(new InquireUser(userLoginRequest)).subscribe((response) =>{
      console.log(response);
      this.router.navigate(['dashboard']);
    });

  }

}
