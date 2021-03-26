import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ClientGuard implements CanActivate {
  router: any;
 
  constructor (private authService: AuthService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (!this.authService.isLoggedIn()) {
        this.router.navigate(['/login']);
        return false;
      }

      if(!this.authService.cantEdit() ){
      this.router.navigate(['/list-of-trips']);
        return false;
      }
      return true;
  }
  
}
