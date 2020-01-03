import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(
    private loginService:LoginService
  ) {
  //   this.loginService.getUser().subscribe(data=>{
  // localStorage.setItem('user',data['levelOfUserId']);
  // console.log(localStorage.getItem('user'))
  //   })
   }

  ngOnInit() {
 
  }

}
