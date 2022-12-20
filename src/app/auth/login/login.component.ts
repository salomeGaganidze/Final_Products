import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { mailValid } from 'src/app/coreData/checkMailValidator';
import { authService } from '../authService/authUserData.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  AuthForm: FormGroup;

  constructor(
    private _router: Router,
    private _fbuilder: FormBuilder,
    private _serv: authService
  ) {
    this.AuthForm = _fbuilder.group({
      email: this._fbuilder.control('kminchelle', [Validators.required]), //mailValid  -- ???
      password: this._fbuilder.control('0lelplR', Validators.required),
    });
  }

  ngOnInit(): void {}

  OnSubmit() {
    if (this.AuthForm.valid) {
      console.log(`Yoir Form Is Valid :  ${this.AuthForm.value}`);
      console.log(this.AuthForm.value);
      this._serv.authUserData(this.AuthForm.value).subscribe(() => {
        this._router.navigate(['main/products']);
      });

      // this._router.navigate(['main/products']);
    } else {
      console.log('Your Form Is Invalid');
      console.log(this.AuthForm);
      console.log(this.findInvalidControls());
    }
  }

  get email() {
    return this.AuthForm.get('email') as FormControl;
  }

  get password() {
    return this.AuthForm.get('password') as FormControl;
  }

  public findInvalidControls() {
    const invalid = [];
    const controls = this.AuthForm.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        invalid.push(name);
      }
    }
    return invalid;
  }
}
