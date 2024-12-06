import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AircraftActionsTypes, SearchAircraftActionsTypes } from 'src/app/ngrx/aircrafts.actions';
import { GetAllAircraftsAction, GetDesignedAircraftsAction, GetDeveloppedAircraftsAction } from 'src/app/ngrx/aircrafts.actions';
//import { EventService } from 'src/app/services/event.service';
//import { EventService } from 'src/app/state/event.service';

@Component({
  selector: 'app-aircrafts-navbar',
  templateUrl: './aircrafts-navbar.component.html',
  styleUrls: ['./aircrafts-navbar.component.css']
})
export class AircraftsNavbarComponent implements OnInit {

  @Output() eventEmitter : EventEmitter<any> = new EventEmitter();
  //Il s'agit de provoquer un évènement de sortir sur notre composant
  //9/ Gestion du composant de navigation
  //constructor(private eventService : EventService) { }
  constructor(private store : Store<any>){ //injection du store en spécifiant ou pas le type du state

  }
  ngOnInit(): void {
  }
  
  getAllAircrafts(){
    //User a cliqué sur le bouton afficher tous les avions aussi il faut dispatcher l'action à l'aide du store
    this.store.dispatch(new GetAllAircraftsAction({}));
    //Le reducer et l'effect ont reçu la notification du Store et ils ont pris le relais
  }
  getDesignedAircrafts(){
    this.store.dispatch(new GetDesignedAircraftsAction({}));
  }
  getDevelopmentAircrafts(){
    this.store.dispatch(new GetDeveloppedAircraftsAction({}));
  }

  onSearch(keyword: string): void {
    if (keyword && keyword.trim().length > 0) {
      console.log('Envoi de l\'action de recherche avec le mot-clé:', keyword.trim());
      this.store.dispatch({
        type: SearchAircraftActionsTypes.GET_SEARCH_AIRCRAFTS,
        payload: keyword.trim(),
      });
    } else {
      console.log('Veuillez saisir un mot-clé valide.');
    }
  }
}
