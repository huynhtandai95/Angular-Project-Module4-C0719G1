import { Component, OnInit } from '@angular/core';
import { RegisterService } from "../../services/register.service";
import { FormBuilder, FormGroup,Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public formRegister: FormGroup;
  public errors;
  constructor(
    private _FormBuilder: FormBuilder,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private registerService: RegisterService
  ) {
    this.register();
  }

  ngOnInit() {
  }
  register() {
    this.formRegister = this._FormBuilder.group({
      fullName: ['',[
        Validators.required
      ]],
      email: ['',[
        Validators.required,
        Validators.pattern('([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+')
      ]],
      address: ['',[
        Validators.required,
      ]],
      phoneNumber: ['',[
        Validators.required,
        Validators.pattern('^(([\+][8][4])|[0])([0-9]{9,10})$')
      ]],
      password: ['',[
        Validators.required,
      ]],
      passwordConfirm: ['',[
        Validators.required,
      ]]
      
    })
      // this.formRegister.valueChanges.subscribe(data => {
      //   console.log(data)
      // })
  }
  onClickRegister() {
    this.registerService.register(this.formRegister.value).subscribe(data => {
      this.router.navigateByUrl('/successRegister');
// console.log(data ) 
    },error => {
     this.errors= error.error.errors
    })
  }
}
