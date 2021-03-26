import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  router: any;
  
  constructor(private authService : AuthService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (!this.authService.isLoggedIn()) {
        this.router.navigate(['/login']);
        return false;
      }
      if(!this.authService.isUserAdmin()){
      this.router.navigate(['/login']);
        return false;
      }
      
      return true;
    }
  
  
}
