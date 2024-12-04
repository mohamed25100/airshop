import { Actions, ofType } from "@ngrx/effects";
import { AuthService } from "../services/auth.service";
import { AuthActions, AuthActionsTypes, TryToLoginActionError, TryToLoginActionSuccess } from "./auth.actions";
import { catchError, map, mergeMap, of } from "rxjs";
import { Injectable } from "@angular/core";
import { User } from "../model/user.model";

@Injectable()
export class AuthEffects {
    constructor(private authService: AuthService, private effectActions: Actions) {
        () => this.effectActions.pipe(
            ofType(AuthActionsTypes.TRY_TO_LOGIN),
            mergeMap((action: AuthActions) => {
                return this.authService.getUser(action.payload.userName, action.payload.password).pipe(
                    map((user: User | undefined) => new TryToLoginActionSuccess(user)),
                    catchError((err) => of(new TryToLoginActionError(err.message)))
                )
            })
        )
    }
}