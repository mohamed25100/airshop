import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { createEffects } from "@ngrx/effects/src/effects_module";
import { catchError, map, mergeMap, Observable, of } from "rxjs";
import { AircraftService } from "../services/aircraft.service";
import { Action } from "@ngrx/store";
import { AircraftActionsTypes, GetAllAircraftsActionError, GetAllAircraftsActionSuccess } from "./aircrafts.actions";

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
}
