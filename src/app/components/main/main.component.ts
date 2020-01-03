import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LoginService } from "../../services/login.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  user;
  constructor(
    private router: Router,
    private loginServeice: LoginService
  ) { }

  ngOnInit() {
    if (localStorage.getItem('token')) {
      this.loginServeice.getUser().subscribe(data => {
        this.user = data;
      });
    }

  }
  logout() {
    this.loginServeice.logout().subscribe(data => {
      console.log(data);
      window.location.href=('/post/list') 
      // this.router.navigateByUrl('/post/list')
    })
    localStorage.removeItem('token');

  }
  backToListPost(){
    window.location.href='/post/list';
  }
}
