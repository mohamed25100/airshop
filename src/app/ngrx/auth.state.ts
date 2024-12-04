export enum AuthStateEnum {
    LOADING = "Loading",
    LOADED = "Loaded",
    ERROR = "Error",
    INITIAL = "Initial"
}

export interface AuthState {
    userName: string,
    password: string,
    errroMessage: string,
    dataState: AuthStateEnum
}

export const initState: AuthState = {
    userName: "",
    password: "",
    errroMessage: "",
    dataState: AuthStateEnum.INITIAL
}