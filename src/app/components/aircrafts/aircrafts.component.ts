import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
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
  readonly dataStateEnum = AircraftsStateEnum;

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
  this.router.navigate(['/programs', msn]); // Redirection vers le component Programs avec msn comme paramètre
    }


  /*option 2
  //aircraft[] | null; //option 1 : soit un tableau d'avions, soit null d'ou l'affectation
  aircrafts$:Observable<Aircraft[]> | null = null;// option 2 : aircrafts est de type observable contenant des avions
  //le cigle $ est une convention d'écriture pour indiquer qu'il s'agit d'un observable
  error = null;
  constructor(private aircraftService:AircraftService) { }

  ngOnInit(): void {
    
  }
  getAllAircrafts() {
    //Option 2 : la methode du service renvoi un Observable
    this.aircrafts$ = this.aircraftService.getAircrafts(); //delors il faut bien faire un subscribe puisqu'il n'est plus sollicité ici
    //en effet, l'appel sera fait côté html en précisant (pipe)"| async toujours pour agir lorsque des données arrivent 
  }

  getDesignedAircrafts() {
    this.aircrafts$ = this.aircraftService.getDesignedAircrafts();
  }

  getDevelopmentAircrafts() {
    this.aircrafts$ = this.aircraftService.getDevelopmentAircrafts();
  }
  */
  /*
  option 1
  aircrafts : Aircraft[] | null = null; // soit un tableau d'avions soit null d'ou l'affectation
  error = null;
  constructor(private aircraftService:AircraftService) { }

  ngOnInit(): void {
  }

  getAllAircrafts() {
    // Option 1 : nous observons ici ce qui se passe lorsqu'on déclanche l'évenement : récupérer la liste d'avions en base
    this.aircraftService.getAircrafts().subscribe({
      next: (data) => this.aircrafts = data,
      error: (err) => this.error = err.message,
      complete: () => this.error = null
    })
    //this.aircraftService.getAircrafts().subscribe( //ecriture dépréciée
    //data => { this.aircrafts = data
    //}, err => {
    //  console.log(err)
    //})
  }
  getDesignedAircrafts() {
    this.aircraftService.getDesignedAircrafts().subscribe({
      next: (data) => this.aircrafts = data,
      error: (err) => this.error = err.message,
      complete: () => this.error = null
    })
  }
  getDevelopmentAircrafts() {
    this.aircraftService.getDevelopmentAircrafts().subscribe({
      next: (data) => this.aircrafts = data,
      error: (err) => this.error = err.message,
      complete: () => this.error = null
    })
  }
  */

}
