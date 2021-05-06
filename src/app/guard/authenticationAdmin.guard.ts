import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../web-service/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationAdminGuard implements CanActivate {

  constructor(
    private router: Router,
    private userService: UserService,
  ) {
  }

  async canActivate(): Promise<boolean> {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const result = await this.userService.get(token).toPromise();
        return result.role === 'ADMIN' ? true : this.router.navigate(['/login']);
      } catch (error) {
        return this.router.navigate(['/login']);
      }
    } 
    return this.router.navigate(['/login']);
  }

}
