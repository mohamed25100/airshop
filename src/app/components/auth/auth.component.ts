import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { TryToLoginAction } from 'src/app/ngrx/auth.actions';
import { selectIsAuthenticated } from 'src/app/ngrx/auth.selector';
import { AuthState, AuthStateEnum } from 'src/app/ngrx/auth.state';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})

export class AuthComponent implements OnInit {
    authState$: Observable<AuthState> | null = null;
    readonly authStateEnum = AuthStateEnum;
    loginError: boolean = false;
    
    @Input() username: string = "";
    @Input() password: string = "";

    constructor(private store: Store<any>, private router: Router) { }

    ngOnInit(): void {
        this.authState$ = this.store.pipe(
            map((state) => state.authState));

            this.authState$.subscribe({
                next: (data) => { 
                    this.loginError = data.errorMessage != null;
                    
                    if (data.user != null)
                        this.router.navigateByUrl("aircrafts");
                },
                error: (err) => { this.loginError = true },
                complete: () => { this.loginError = false }
            })
    }

    onSubmit(): void {
        this.store.dispatch(new TryToLoginAction([this.username, this.password]));
    }
}