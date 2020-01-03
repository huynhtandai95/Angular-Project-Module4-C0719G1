import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";
@Injectable({
  providedIn: 'root'
})
export class Level1AccountGuardGuard implements CanActivate {
  constructor(
    private router:Router,
  ){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(localStorage.getItem('user')=="1"){
      return true;
    }else {
      this.router.navigateByUrl('/admin');
      return false;
    }
      
  }
  
}
