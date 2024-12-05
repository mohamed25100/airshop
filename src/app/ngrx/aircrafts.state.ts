import { Aircraft } from "../model/aircraft.model";

export enum AircraftsStateEnum { //les differents etats du state
        LOADING = "Loading",
        LOADED = "Loaded",
        ERROR = "Error",
        INITIAL = "Initial"
    }
    
    export interface AircraftsState { //structure de notre state
        aircrafts : Aircraft[],         //liste d'avions qui s'afffiche
        errorMessage:string,            //message d'erreur
        dataState : AircraftsStateEnum //etat du state
    }
    //définir l'état du state avec des valeurs par défaut
    export const initState: AircraftsState = {
        aircrafts : [],         //liste d'avions qui s'afffiche
        errorMessage: "",            //message d'erreur
        dataState : AircraftsStateEnum.INITIAL //etat du state
    }