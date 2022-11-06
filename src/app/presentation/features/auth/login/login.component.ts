import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private _fb: FormBuilder) {
    this.loginForm = this._initForm();
  }

  ngOnInit(): void {}

  onSubmitForm(): void {
    if (this.loginForm.invalid) {
      console.log('error');
      return;
    }
    const data = { ...this.loginForm.value };
    console.log(data);
  }

  private _initForm(): FormGroup {
    return this._fb.group({
      identifier: [
        '',
        Validators.compose([Validators.required, Validators.email]),
      ],
      password: ['', Validators.required],
    });
  }
}
