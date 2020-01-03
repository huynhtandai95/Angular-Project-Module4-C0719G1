import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { LoginAdminService } from "../../services/loginAdminService";
@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
  public formLogin: FormGroup;
  public dataLogin;
  constructor(
    private _FormBuilder: FormBuilder,
    private loginAdminService:LoginAdminService,
    private router: Router
  ) {
    this.login();
  }

  ngOnInit() {
  }
  login() {
    this.formLogin = this._FormBuilder.group({
      email: [''],
      password: ['']
    })
    this.formLogin.valueChanges.subscribe(data => {
      console.log(data)
    })
  }
  onClickLogin() {
    this.loginAdminService.login(this.formLogin.value).subscribe((data:any) => {
      if (data.success==true) {
        localStorage.setItem('token',data.token);
      window.location.href=('/admin/user-list') 
      } else {

        this.dataLogin = data.message;
        console.log(this.dataLogin)
       
      }
    })
 
  }



}
