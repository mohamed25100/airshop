import { User } from "../model/user.model";

export enum AuthStateEnum {
    LOADING = "Loading",
    LOADED = "Loaded",
    ERROR = "Error",
    INITIAL = "Initial"
}

export interface AuthState {
    isAuthenticated: boolean;
    user: User | null;
    errorMessage: string | null;
    dataState: AuthStateEnum;
}

export const initState: AuthState = {
    isAuthenticated: false,
    user: null,
    errorMessage: null,
    dataState: AuthStateEnum.INITIAL
}