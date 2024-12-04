import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { TryToLoginAction } from 'src/app/ngrx/auth.actions';
import { AuthState, AuthStateEnum } from 'src/app/ngrx/auth.state';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent implements OnInit {
  authState$: Observable<AuthState> | null = null;
  readonly authStateEnum = AuthStateEnum;

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.authState$ = this.store.pipe(
      map((state) => state.airbusState));
  }

  tryToLogin(userName: string, password: string) {
    this.store.dispatch(new TryToLoginAction([userName, password]));
  }
}