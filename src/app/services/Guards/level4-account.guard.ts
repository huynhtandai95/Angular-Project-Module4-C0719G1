import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Level4AccountGuard implements CanActivate {
  constructor(
    private router:Router,
  ){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(localStorage.getItem('user')=="4"||localStorage.getItem('user')=="1"){
        return true;
      }else {
        this.router.navigateByUrl('/admin');
        return false;
      }
  }
  
}
