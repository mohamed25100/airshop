import { Injectable } from "@angular/core"
import { AircraftService } from "../services/aircraft.service"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { catchError, map, mergeMap, Observable, of } from "rxjs"
import { Action } from "@ngrx/store"
import { AircraftActionsTypes, DesignedAircraftActionsTypes, DevelopedAircraftActionsTypes, GetAllAircraftsActionError, GetAllAircraftsActionSuccess, GetDesignedAircraftsActionError, GetDesignedAircraftsActionSuccess, GetDevelopedAircraftsActionError, GetDevelopedAircraftsActionSuccess } from "./aircrafts.actions"

@Injectable ()
export class AircraftsEffects {
    constructor(private aircraftService: AircraftService, private effectActions : Actions){
    }

    GetAllAircraftsEffect:Observable<Action> = createEffect( //creation effect ss condition, on ecoute les actions
        () => this.effectActions.pipe(                        // des qu'une action arrive on verifie son type
            ofType(AircraftActionsTypes.GET_ALL_AIRCRAFTS), //action get, etape suivante merge
            mergeMap((action) =>{
                return this.aircraftService.getAircrafts().pipe( //attente de reception des donnees en base: avions
                map((aircrafts) => new GetAllAircraftsActionSuccess(aircrafts)), //si recu on retourne un observable
                                                                                    //<action> dont le payload est la liste des avions
                                                                                 //l'action une fois émise va être traité par le reducer
                                                                                //case GetAllAircraftsActionTypes.Get_All_Aircrafts_Success
                catchError((err) => of(new GetAllAircraftsActionError(err.message)))
                )
            })
        ) 
    )
    GetDesignAircraftsEffect:Observable<Action> = createEffect( //creation effect ss condition, on ecoute les actions
        () => this.effectActions.pipe(                        // des qu'une action arrive on verifie son type
            ofType(DesignedAircraftActionsTypes.GET_DESIGNED_AIRCRAFTS), //action get, etape suivante merge
            mergeMap((action) =>{
                return this.aircraftService.getDesignedAircrafts().pipe( //attente de reception des donnees en base: avions
                map((aircrafts) => new GetDesignedAircraftsActionSuccess(aircrafts)), //si recu on retourne un observable
                                                                                    //<action> dont le payload est la liste des avions
                                                                                 //l'action une fois émise va être traité par le reducer
                                                                                //case GetAllAircraftsActionTypes.Get_All_Aircrafts_Success
                catchError((err) => of(new GetDesignedAircraftsActionError(err.message)))
                )
            })
        ) 
    )
    GetDevelopedAircraftsEffect:Observable<Action> = createEffect( //creation effect ss condition, on ecoute les actions
        () => this.effectActions.pipe(                        // des qu'une action arrive on verifie son type
            ofType(DevelopedAircraftActionsTypes.GET_DEVELOPED_AIRCRAFTS), //action get, etape suivante merge
            mergeMap((action) =>{
                return this.aircraftService.getDevelopmentAircrafts().pipe( //attente de reception des donnees en base: avions
                map((aircrafts) => new GetDevelopedAircraftsActionSuccess(aircrafts)), //si recu on retourne un observable
                                                                                    //<action> dont le payload est la liste des avions
                                                                                 //l'action une fois émise va être traité par le reducer
                                                                                //case GetAllAircraftsActionTypes.Get_All_Aircrafts_Success
                catchError((err) => of(new GetDevelopedAircraftsActionError(err.message)))
                )
            })
        ) 
    )

}