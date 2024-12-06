
import { AircraftsState, AircraftsStateEnum, initState } from "./aircrafts.state";
import { AircraftActionsTypes, AircraftsActions, DesignedAircraftActionsTypes, DeveloppedAircraftActionsTypes, SearchAircraftActionsTypes } from "./aircrafts.actions";
import { Action } from "@ngrx/store";


export function AircraftsReducer(state: AircraftsState = initState, action: Action) { // type d'action, payload
    switch (action.type) {
        case AircraftActionsTypes.GET_ALL_AIRCRAFTS:
            console.log("loading...");
            return { ...state, DataState: AircraftsStateEnum.LOADING }
        case DesignedAircraftActionsTypes.GET_DESIGNED_AIRCRAFTS:
            console.log("loading...");
            return { ...state, DataState: AircraftsStateEnum.LOADING }
        case DeveloppedAircraftActionsTypes.GET_DEVELOPPED_AIRCRAFTS:
            console.log("loading...");
            return { ...state, DataState: AircraftsStateEnum.LOADING }

        case SearchAircraftActionsTypes.GET_SEARCH_AIRCRAFTS:
            console.log('loading...');
            return { ...state, dataState: AircraftsStateEnum.LOADING };

        case AircraftActionsTypes.GET_ALL_AIRCRAFTS_SUCCESS:
            //action recue par l'effect qui fait une demande en base, recoit les données et génére l'action =>ok
            return { ...state, dataState: AircraftsStateEnum.LOADED, aircrafts: (<AircraftsActions>action).payload }
        //renvoie un clone  + nouveau dataState + liste des avions en base contenu dans le payload
        case DesignedAircraftActionsTypes.GET_DESIGNED_AIRCRAFTS_SUCCESS:
            return { ...state, dataState: AircraftsStateEnum.LOADED, aircrafts: (<AircraftsActions>action).payload }
        case DeveloppedAircraftActionsTypes.GET_DEVELOPPED_AIRCRAFTS_SUCCESS:
            return { ...state, dataState: AircraftsStateEnum.LOADED, aircrafts: (<AircraftsActions>action).payload }
        case SearchAircraftActionsTypes.GET_SEARCH_AIRCRAFTS_SUCCESS:
            return { ...state, dataState: AircraftsStateEnum.LOADED, aircrafts: (<AircraftsActions>action).payload };
        case AircraftActionsTypes.GET_ALL_AIRCRAFTS_ERROR:
            return { ...state, dataState: AircraftsStateEnum.ERROR, errorMessage: "ee" + "ee" + (<AircraftsActions>action).payload }
        case DesignedAircraftActionsTypes.GET_DESIGNED_AIRCRAFTS_ERROR:
            return { ...state, dataState: AircraftsStateEnum.ERROR, errorMessage: (<AircraftsActions>action).payload }
        case DeveloppedAircraftActionsTypes.GET_DEVELOPPED_AIRCRAFTS_ERROR:
            return { ...state, dataState: AircraftsStateEnum.ERROR, errorMessage: (<AircraftsActions>action).payload }
        case SearchAircraftActionsTypes.GET_SEARCH_AIRCRAFTS_ERROR:
            return { ...state, dataState: AircraftsStateEnum.ERROR, errorMessage: (<AircraftsActions>action).payload };

        default:
            return { ...state }
    }
}