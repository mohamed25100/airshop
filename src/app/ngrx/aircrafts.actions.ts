import { Action } from "@ngrx/store";
import { Aircraft } from "../model/aircraft.model";

export enum AircraftActionsTypes {
    //Actions Get all aircrafts
    //pour l'action consistant à ajouter tous les avions , 3 états possibles
    GET_ALL_AIRCRAFTS = "[Aircrafts] Get All aircrafts",
    GET_ALL_AIRCRAFTS_SUCCESS = "[Aircrafts] Get all aircrafts success",
    GET_ALL_AIRCRAFTS_ERROR = "[Aircrafts] Get all aircrafts error",
}
export enum DesignedAircraftActionsTypes {
    //Actions Get designed aircrafts
    //pour l'action consistant à ajouter les avions , 3 états possibles
    GET_DESIGNED_AIRCRAFTS = "[Aircrafts] Get All aircrafts",
    GET_DESIGNED_AIRCRAFTS_SUCCESS = "[Aircrafts] Get all aircrafts success",
    GET_DESIGNED_AIRCRAFTS_ERROR = "[Aircrafts] Get all aircrafts error",
}
export enum DeveloppedAircraftActionsTypes {
    //Actions Get developped aircrafts
    //pour l'action consistant à ajouter les avions , 3 états possibles
    GET_DEVELOPPED_AIRCRAFTS = "[Aircrafts] Get All aircrafts",
    GET_DEVELOPPED_AIRCRAFTS_SUCCESS = "[Aircrafts] Get all aircrafts success",
    GET_DEVELOPPED_AIRCRAFTS_ERROR = "[Aircrafts] Get all aircrafts error",
}
//get all aircrafts
export class GetAllAircraftsAction implements Action{
    type: AircraftActionsTypes = AircraftActionsTypes.GET_ALL_AIRCRAFTS;
    constructor(public payload:any){
    }
}
export class GetAllAircraftsActionSuccess implements Action{
    type: AircraftActionsTypes = AircraftActionsTypes.GET_ALL_AIRCRAFTS_SUCCESS;
    constructor(public payload:Aircraft[]){
    }
}

export class GetAllAircraftsActionError implements Action{
    type: AircraftActionsTypes = AircraftActionsTypes.GET_ALL_AIRCRAFTS_ERROR;
    constructor(public payload:string){
    }
}
//get all designed aircrafts
export class GetDesignedAircraftsAction implements Action{ //A fixer
    type: DesignedAircraftActionsTypes = DesignedAircraftActionsTypes.GET_DESIGNED_AIRCRAFTS;
    constructor(public payload:any){
    }
}
export class GetDesignedAircraftsActionSuccess implements Action{
    type: DesignedAircraftActionsTypes = DesignedAircraftActionsTypes.GET_DESIGNED_AIRCRAFTS_SUCCESS;
    constructor(public payload:Aircraft[]){
    }
}

export class GetDesignedAircraftsActionError implements Action{
    type: DesignedAircraftActionsTypes = DesignedAircraftActionsTypes.GET_DESIGNED_AIRCRAFTS_ERROR;
    constructor(public payload:string){
    }
}
//get all developped aircrafts
export class GetDeveloppedAircraftsAction implements Action{ //A fixer
    type: DeveloppedAircraftActionsTypes = DeveloppedAircraftActionsTypes.GET_DEVELOPPED_AIRCRAFTS;
    constructor(public payload:any){
    }
}
export class GetDeveloppedAircraftsActionSuccess implements Action{
    type: DeveloppedAircraftActionsTypes = DeveloppedAircraftActionsTypes.GET_DEVELOPPED_AIRCRAFTS_SUCCESS;
    constructor(public payload:Aircraft[]){
    }
}

export class GetDeveloppedAircraftsActionError implements Action{
    type: DeveloppedAircraftActionsTypes = DeveloppedAircraftActionsTypes.GET_DEVELOPPED_AIRCRAFTS_ERROR;
    constructor(public payload:string){
    }
}

export type AircraftsActions = GetAllAircraftsAction | GetAllAircraftsActionSuccess | GetAllAircraftsActionError | GetDesignedAircraftsAction |  GetDesignedAircraftsActionSuccess | GetDesignedAircraftsActionError |GetDeveloppedAircraftsAction | GetDeveloppedAircraftsActionSuccess | GetDeveloppedAircraftsActionError