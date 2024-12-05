import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { selectIsAuthenticated } from '../ngrx/auth.selector';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  autorised: boolean = false;

  constructor(private store: Store, private router: Router) {
    this.store.select(selectIsAuthenticated).subscribe({
      next: (data) => { this.autorised = data },
      error: (err) => { this.autorised = false },
      complete: () => { },
    });
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    return this.autorised;
  };
}