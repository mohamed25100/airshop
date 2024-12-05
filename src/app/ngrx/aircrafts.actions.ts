import { Action } from "@ngrx/store";
import { Aircraft } from "../model/aircraft.model";

export enum AircraftActionsTypes {
    //Actions Get all aircrafts
    //pour l'action consistant à ajouter tous les avions , 3 états possibles
    GET_ALL_AIRCRAFTS = "[Aircrafts] Get All Aircrafts",
    GET_ALL_AIRCRAFTS_SUCCESS = "[Aircrafts] Get All Aircrafts Success",
    GET_ALL_AIRCRAFTS_ERROR = "[Aircrafts] Get All Aircrafts Error",

    GET_SEARCH_AIRCRAFTS_SUCCESS = "[Aircrafts] Get Search Aircrafts Success",
    GET_SEARCH_AIRCRAFTS_ERROR = "[Aircrafts] Get Search Aircrafts Error",
}
export enum DesignedAircraftActionsTypes {
    //Actions Get designed aircrafts
    //pour l'action consistant à ajouter les avions , 3 états possibles
    GET_DESIGNED_AIRCRAFTS = "[Aircrafts] Get Designed Aircrafts",
    GET_DESIGNED_AIRCRAFTS_SUCCESS = "[Aircrafts] Get Designed Aircrafts Success",
    GET_DESIGNED_AIRCRAFTS_ERROR = "[Aircrafts] Get Designed Aircrafts Error",
}
export enum DevelopedAircraftActionsTypes {
    //Actions Get developped aircrafts
    //pour l'action consistant à ajouter les avions , 3 états possibles
    GET_DEVELOPED_AIRCRAFTS = "[Aircrafts] Get Developed Aircrafts",
    GET_DEVELOPED_AIRCRAFTS_SUCCESS = "[Aircrafts] Get Developed Aircrafts Success",
    GET_DEVELOPED_AIRCRAFTS_ERROR = "[Aircrafts] Get Developed Aircrafts Error",
}
//get all aircrafts
export class GetAllAircraftsAction implements Action {
    type: AircraftActionsTypes = AircraftActionsTypes.GET_ALL_AIRCRAFTS;
    constructor(public payload: any) {
    }
}
export class GetAllAircraftsActionSuccess implements Action {
    type: AircraftActionsTypes = AircraftActionsTypes.GET_ALL_AIRCRAFTS_SUCCESS;
    constructor(public payload: Aircraft[]) {
    }
}

export class GetAllAircraftsActionError implements Action {
    type: AircraftActionsTypes = AircraftActionsTypes.GET_ALL_AIRCRAFTS_ERROR;
    constructor(public payload: string) {
    }
}
//get all designed aircrafts
export class GetDesignedAircraftsAction implements Action { //A fixer
    type: DesignedAircraftActionsTypes = DesignedAircraftActionsTypes.GET_DESIGNED_AIRCRAFTS;
    constructor(public payload: any) {
    }
}
export class GetDesignedAircraftsActionSuccess implements Action {
    type: DesignedAircraftActionsTypes = DesignedAircraftActionsTypes.GET_DESIGNED_AIRCRAFTS_SUCCESS;
    constructor(public payload: Aircraft[]) {
    }
}

export class GetDesignedAircraftsActionError implements Action {
    type: DesignedAircraftActionsTypes = DesignedAircraftActionsTypes.GET_DESIGNED_AIRCRAFTS_ERROR;
    constructor(public payload: string) {
    }
}
//get all developped aircrafts
export class GetDevelopedAircraftsAction implements Action { //A fixer
    type: DevelopedAircraftActionsTypes = DevelopedAircraftActionsTypes.GET_DEVELOPED_AIRCRAFTS;
    constructor(public payload: any) {
    }
}
export class GetDevelopedAircraftsActionSuccess implements Action {
    type: DevelopedAircraftActionsTypes = DevelopedAircraftActionsTypes.GET_DEVELOPED_AIRCRAFTS_SUCCESS;
    constructor(public payload: Aircraft[]) {
    }
}

export class GetDevelopedAircraftsActionError implements Action {
    type: DevelopedAircraftActionsTypes = DevelopedAircraftActionsTypes.GET_DEVELOPED_AIRCRAFTS_ERROR;
    constructor(public payload: string) {
    }
}

export type AircraftsActions = GetAllAircraftsAction | GetAllAircraftsActionSuccess | GetAllAircraftsActionError | GetDesignedAircraftsAction | GetDesignedAircraftsActionSuccess | GetDesignedAircraftsActionError | GetDevelopedAircraftsAction | GetDevelopedAircraftsActionSuccess | GetDevelopedAircraftsActionError;