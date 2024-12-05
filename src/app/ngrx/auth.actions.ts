import { Action } from "@ngrx/store";
import { User } from "../model/user.model";

export enum AuthActionsTypes {
    TRY_TO_LOGIN = "[Auth] Try to login",
    TRY_TO_LOGIN_SUCCESS = "[Auth] Try to login Success",
    TRY_TO_LOGIN_ERROR = "[Auth] Try to login Error",
    LOGOUT = "[Auth] Logout",
    LOGOUT_SUCCESS = "[Auth] Logout Success",
    LOGOUT_ERROR = "[Auth] Logout Error",
    CHECK_LOGIN_STATUS = "[Auth] Check login status",
    CHECK_LOGIN_STATUS_SUCCESS = "[Auth] Check login status Success",
    CHECK_LOGIN_STATUS_ERROR = "[Auth] Check login status Error",
}

// Check login status
export class CheckLoginStatusAction implements Action {
    type: AuthActionsTypes = AuthActionsTypes.CHECK_LOGIN_STATUS;

    constructor(public payload: string[]) {

    }    
}

// Try to login
export class TryToLoginAction implements Action {
    type: AuthActionsTypes = AuthActionsTypes.TRY_TO_LOGIN;

    constructor(public payload: string[]) {

    }    
}

export class TryToLoginActionSuccess implements Action {
    type: AuthActionsTypes = AuthActionsTypes.TRY_TO_LOGIN_SUCCESS;

    constructor(public payload: User | undefined) {
        
    }    
}

export class TryToLoginActionError implements Action {
    type: AuthActionsTypes = AuthActionsTypes.TRY_TO_LOGIN_ERROR;

    constructor(public payload: string) {

    }    
}

// Logout
export class LogoutAction implements Action {
    type: AuthActionsTypes = AuthActionsTypes.LOGOUT;

    constructor(public payload: any) {

    }    
}

export class LogoutActionSuccess implements Action {
    type: AuthActionsTypes = AuthActionsTypes.LOGOUT_SUCCESS;

    constructor(public payload: void) {

    }    
}

export class LogoutActionError implements Action {
    type: AuthActionsTypes = AuthActionsTypes.LOGOUT_ERROR;

    constructor(public payload: string) {

    }    
}

export type AuthActions = TryToLoginAction | TryToLoginActionSuccess | TryToLoginActionError | LogoutAction | LogoutActionSuccess | LogoutActionError;