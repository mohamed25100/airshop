import { Action } from "@ngrx/store";
import { AuthState, AuthStateEnum, initState } from "./auth.state";
import { AuthActions, AuthActionsTypes } from "./auth.actions";
import { User } from "../model/user.model";

export function AuthReducer(state: AuthState = initState, action: Action) {
    switch (action.type) {
        case AuthActionsTypes.TRY_TO_LOGIN:
            return { ...state, dataState: AuthStateEnum.LOADING };

        case AuthActionsTypes.TRY_TO_LOGIN_SUCCESS:
            return { ...state, dataState: AuthStateEnum.LOADED, user: new User((<AuthActions>action).payload.userName, (<AuthActions>action).payload.password), isAuthenticated: true };

        case AuthActionsTypes.TRY_TO_LOGIN_ERROR:
            return { ...state, dataState: AuthStateEnum.ERROR, errorMessage: "erreur" };

        case AuthActionsTypes.LOGOUT:
            return { ...state, dataState: AuthStateEnum.LOADING };

        case AuthActionsTypes.LOGOUT_SUCCESS:
            return { ...state, dataState: AuthStateEnum.LOADED };

        case AuthActionsTypes.LOGOUT_ERROR:
            return { ...state, dataState: AuthStateEnum.ERROR, errorMessage: (<AuthActions>action).payload };

        default:
            return { ...state };
    }
}

export { AuthState };
