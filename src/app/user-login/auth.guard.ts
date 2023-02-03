import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../Services/user.service';
 

@Injectable({
  providedIn: 'root'
})
export class AuthentcationGuard implements CanActivate {
 
  constructor(private service:UserService , private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  
   // Only if the user is a login and Store For LocalStorage
      
  if (this.service.getToken()?.length) {
    return true;
  }
  
  this.router.navigate(['/Login']);
  return false;
  }
  
}
