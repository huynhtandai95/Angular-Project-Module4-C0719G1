import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { LoginService } from "../../../services/login.service";

@Component({
  selector: 'app-login-users',
  templateUrl: './login-users.component.html',
  styleUrls: ['./login-users.component.css']
})
export class LoginUsersComponent implements OnInit {
  public formLogin: FormGroup;
  public dataLogin;
  constructor(
    private _FormBuilder: FormBuilder,
    private loginService: LoginService,
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
  }
  onClickLogin() {
    this.loginService.login(this.formLogin.value).subscribe((data:any) => {
      if (data.success==true) {
        localStorage.setItem('token',data.token);
        this.loginService.getUser().subscribe(result=>{
          localStorage.setItem('user',result['levelOfUserId']);
          console.log(localStorage.getItem('user'))
        });
        setTimeout(() => {   
                window.location.href = '/post/list'
              }, 5000);
         
      } 
      else {
        this.dataLogin = data.message;
       
      }
    })
 
  }

}
