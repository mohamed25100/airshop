import { Injectable } from "@angular/core"
import { AircraftService } from "../services/aircraft.service"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { catchError, map, mergeMap, Observable, of } from "rxjs"
import { Action } from "@ngrx/store"
import { AircraftActionsTypes, DesignedAircraftActionsTypes, DeveloppedAircraftActionsTypes, GetAllAircraftsActionError, GetAllAircraftsActionSuccess, GetDesignedAircraftsActionError, GetDesignedAircraftsActionSuccess, GetDeveloppedAircraftsActionError, GetDeveloppedAircraftsActionSuccess, SearchAircraftActionsTypes } from "./aircrafts.actions"

@Injectable()
export class AircraftsEffects {
    constructor(private aircraftService: AircraftService, private effectActions: Actions) {
    }

    GetAllAircraftsEffect: Observable<Action> = createEffect( //creation effect ss condition, on ecoute les actions
        () => this.effectActions.pipe(                        // des qu'une action arrive on verifie son type
            ofType(AircraftActionsTypes.GET_ALL_AIRCRAFTS), //action get, etape suivante merge
            mergeMap((action) => {
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
    GetDesignAircraftsEffect: Observable<Action> = createEffect( //creation effect ss condition, on ecoute les actions
        () => this.effectActions.pipe(                        // des qu'une action arrive on verifie son type
            ofType(DesignedAircraftActionsTypes.GET_DESIGNED_AIRCRAFTS), //action get, etape suivante merge
            mergeMap((action) => {
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
    GetDevelopedAircraftsEffect: Observable<Action> = createEffect( //creation effect ss condition, on ecoute les actions
        () => this.effectActions.pipe(                        // des qu'une action arrive on verifie son type
            ofType(DeveloppedAircraftActionsTypes.GET_DEVELOPPED_AIRCRAFTS), //action get, etape suivante merge
            mergeMap((action) => {
                return this.aircraftService.getDeveloppedAircrafts().pipe( //attente de reception des donnees en base: avions
                    map((aircrafts) => new GetDeveloppedAircraftsActionSuccess(aircrafts)), //si recu on retourne un observable
                    //<action> dont le payload est la liste des avions
                    //l'action une fois émise va être traité par le reducer
                    //case GetAllAircraftsActionTypes.Get_All_Aircrafts_Success
                    catchError((err) => of(new GetDeveloppedAircraftsActionError(err.message)))
                )
            })
        )
    )
    GetSearchAircraftsEffect: Observable<Action> = createEffect(() =>
        this.effectActions.pipe(
            ofType(SearchAircraftActionsTypes.GET_SEARCH_AIRCRAFTS),
            mergeMap((action: any) =>
                this.aircraftService.searchAircrafts(action.payload).pipe(
                    map((aircrafts) => new GetAllAircraftsActionSuccess(aircrafts)),
                    catchError((err) => of(new GetAllAircraftsActionError(err.message)))
                )
            )
        )
    );

}