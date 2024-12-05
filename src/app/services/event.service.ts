import { Subject } from "rxjs";
import { ActionEvent } from "../ngrx/aircraft.action";
import { Injectable } from "@angular/core";

@Injectable({providedIn: "root"})
export class EventService {
    eventSubject : Subject<ActionEvent> = new Subject<ActionEvent>();
    eventSubjectObservable = this.eventSubject.asObservable();

    publishEvent(event : ActionEvent){
        this.eventSubject.next(event);
    }
}