import { Component, OnInit } from '@angular/core';
import { catchError, map, Observable, of, startWith } from 'rxjs';
import { Store } from '@ngrx/store';
import { GetAllAircraftsAction, GetDesignedAircraftsAction, GetDeveloppedAircraftsAction } from 'src/app/ngrx/aircrafts.actions';
import { AircraftsState, AircraftsStateEnum } from 'src/app/ngrx/aircrafts.state';
import { Router } from '@angular/router';


@Component({
  selector: 'app-aircrafts',
  templateUrl: './aircrafts.component.html',
  styleUrls: ['./aircrafts.component.css']
})
export class AircraftsComponent implements OnInit {
  aircraftsState$: Observable<AircraftsState> | null = null;
  //option 3 : aircrafts est de type observable de structure de donnée AppDataState constituée de 3 éléments facultatifs
  //le type générique ici sera dans notre cas une liste d'avions
  //cette étape est indispensable afin de permettre à pipe de renvoyer le même type de donnée pour les 3 cas d'utilisations s,m et c
  readonly aircraftsStateEnum = AircraftsStateEnum;

  constructor(private store: Store<any>, private router: Router) {} //injection du store

  ngOnInit(): void {
    this.aircraftsState$ = this.store.pipe( //ecoute du store, on recolte le state des qu'il change pour afficher les données
      map((state)=> state.airbusState)
    )
    
  }

  getAllAircrafts() {
    //l'utilisateur a clique sur le bout on afficher tous les avions =>dispatch action à l'aide du store
    this.store.dispatch (new GetAllAircraftsAction({}));
      //le reducer et l'effect ont recu la notification du store et pris le relais   
  }

  getDesignedAircrafts() {
      this.store.dispatch (new GetDesignedAircraftsAction({}));
  }

  getDevelopmentAircrafts() {
      this.store.dispatch (new GetDeveloppedAircraftsAction({}));
  }

  // je sélectionne un avion et renvoi vers la page de Programs
  onSelectAircraft(msn: Number): void {
  this.router.navigateByUrl('programs/'+msn); // Redirection vers le component Programs avec msn comme paramètre
    }
}
