import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { StorageService } from 'src/app/shared/services/storage.service';
import FormsHandler from '../../shared/FormsHandler/FormsHandler';
import { AuthService } from '../../shared/auth/auth.service'; 
import { project_id } from 'src/constants/const';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm: FormGroup;
  loading = false;
  formError = '';

  constructor(
    private router: Router,
    private _fb: FormBuilder,
    public auth: AuthService,
  ) { }

  ngOnInit() {
    if (this.auth.islogin()) {
      this.router.navigate(['chat']);
    }
    this.buildForm();
    document.addEventListener("keyup", event => {
      if (event.code === 'Enter') {
        this.onLogin();
      }
    });
  }

  buildForm() {
    this.loginForm = this._fb.group({
      'email': new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(14)])
    }, { updateOn: 'change' });
  }

  onLogin() {
    FormsHandler.validateForm(this.loginForm);
    if (this.loginForm.invalid) return;
    const saveData = this.loginForm.value;
    saveData.project_id = project_id; //'1KMMRG';
    this.loading = true;
    this.formError = null;
    this.auth.login(saveData).subscribe(v => {
      this.loading = false;
      if (v && v.status == 200) {
        StorageService.setUserData(v);
        StorageService.setAuthToken(v.auth_token);
        StorageService.setAuthUsername(v.ref_id);
        this.router.navigate(['chat']);
        this.loginForm.reset();
      } else {
        this.formError = v.message;
      }
    });
  }

  ngOnDestroy() {
    this.loginForm.reset();
  }

}
