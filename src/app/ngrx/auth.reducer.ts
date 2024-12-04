import { Action } from "@ngrx/store";
import { AuthState, AuthStateEnum, initState } from "./auth.state";
import { AuthActions, AuthActionsTypes } from "./auth.actions";

export function AuthReducer(state: AuthState = initState, action: Action) {
    switch (action.type) {
        case AuthActionsTypes.TRY_TO_LOGIN:
            console.table('loading');
            return { ...state, dataState: AuthStateEnum.LOADING };

        case AuthActionsTypes.LOGOUT:
            return { ...state, dataState: AuthStateEnum.LOADING };

        case AuthActionsTypes.LOGOUT_SUCCESS:
            return { ...state, dataState: AuthStateEnum.LOADED };

        case AuthActionsTypes.LOGOUT_ERROR:
            return { ...state, dataState: AuthStateEnum.ERROR, errorMessage: (<AuthActions> action).payload };

        default:
            return { ...state };
    }
}