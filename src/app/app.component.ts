import { Component, Input } from '@angular/core';
import { AuthState, AuthStateEnum } from './ngrx/auth.state';
import { map, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'airshop';
  authState$: Observable<AuthState> | null = null;
  readonly authStateEnum = AuthStateEnum;
  @Input() authOK: boolean = false;

  constructor(private store: Store<any>, private router: Router) { }

  ngOnInit(): void {
      this.authState$ = this.store.pipe(
          map((state) => state.authState));

          this.authState$.subscribe({
              next: (data) => { 
                  if (data.user != null)
                      this.authOK = true;
              },
              error: (err) => { },
              complete: () => { }
          })
  }

}
