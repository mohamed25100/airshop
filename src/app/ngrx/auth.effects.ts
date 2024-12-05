import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "../services/auth.service";
import { AuthActions, AuthActionsTypes, TryToLoginActionError, TryToLoginActionSuccess } from "./auth.actions";
import { catchError, map, mergeMap, Observable, of } from "rxjs";
import { Injectable } from "@angular/core";
import { User } from "../model/user.model";
import { Action } from "@ngrx/store";

@Injectable()
export class AuthEffects {
    constructor(private authService: AuthService, private effectActions: Actions) {
    }

    tryToLogin: Observable<Action> = createEffect(
        () => this.effectActions.pipe(
            ofType(AuthActionsTypes.TRY_TO_LOGIN),
            mergeMap((action: AuthActions) => {
                return this.authService.getUser(action.payload[0], action.payload[1]).pipe(
                    map((user: User | undefined) =>
                        (user != undefined ? new TryToLoginActionSuccess(user) : new TryToLoginActionError("Bad credentials"))),
                    catchError((err) => of(new TryToLoginActionError(err.message)))
                )
            })
        )
    );
}