import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardGuard implements CanActivate {
  testAuth:boolean;
  constructor( private _router :Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean{
      if(this.testAuth == true) {return true;} //افتح اللنك ده 
      else{
       //لو مش عامل تسجيل دخول  وديه للصفحة الرئيسية 
       this._router.navigate(['/home'])
        return false;
      }
    }
  
}
