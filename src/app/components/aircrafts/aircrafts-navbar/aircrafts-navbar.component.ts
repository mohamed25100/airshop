import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AircraftsActionsTypes } from 'src/app/action/aircraft.action';
import { EventService } from 'src/app/state/event.service';

@Component({
  selector: 'app-aircrafts-navbar',
  templateUrl: './aircrafts-navbar.component.html',
  styleUrls: ['./aircrafts-navbar.component.css']
})
export class AircraftsNavbarComponent implements OnInit {

  @Output() eventEmitter : EventEmitter<any> = new EventEmitter();
  //Il s'agit de provoquer un évènement de sortir sur notre composant
  constructor(private eventService : EventService) { }

  ngOnInit(): void {
  }
  //lorsque l'utilisateur clic sur un bouton l'action correspondante est émise
  getAllAircrafts() {
    this.eventService.publishEvent({type : AircraftsActionsTypes.GET_ALL_AIRCRAFTS ,payload: null})
    //this.eventEmitter.emit({type : AircraftsActionsTypes.GET_ALL_AIRCRAFTS , payload : null});
    //dorénavant on émet notre objet évt ici avec un payload null puisqu'il n'y a pas d'arguments...
  }
  onSearch(value : any) {
    this.eventService.publishEvent({type : AircraftsActionsTypes.GET_SEARCH_AIRCRAFTS ,payload: value})
    //this.eventEmitter.emit({type : AircraftsActionsTypes.GET_SEARCH_AIRCRAFTS ,payload: value})
    //émission de lévènement avec le mot clé de recherche dans le payload
  }
  getDesignedAircrafts() {
    this.eventService.publishEvent({type : AircraftsActionsTypes.GET_DESIGNED_AIRCRAFTS ,payload: null})
    //this.eventEmitter.emit({type : AircraftsActionsTypes.GET_DESIGNED_AIRCRAFTS, payload : null});
  }
  getDevelopmentAircrafts() {
    this.eventService.publishEvent({type : AircraftsActionsTypes.GET_DEVELOPMENT_AIRCRAFTS ,payload: null})
    //this.eventEmitter.emit({type : AircraftsActionsTypes.GET_DEVELOPMENT_AIRCRAFTS, payload : null});
  }
}
