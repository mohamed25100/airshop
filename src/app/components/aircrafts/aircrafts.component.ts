import { Component, OnInit } from '@angular/core';
import { catchError, map, Observable, of, startWith } from 'rxjs';
import { Aircraft } from 'src/app/model/aircraft.model';
import { AircraftService } from 'src/app/services/aircraft.service';
import { AppDataState, DataStateEnum } from 'src/app/state/aircraft.state';

@Component({
  selector: 'app-aircrafts',
  templateUrl: './aircrafts.component.html',
  styleUrls: ['./aircrafts.component.css']
})
export class AircraftsComponent implements OnInit {
  aircrafts$: Observable<AppDataState<Aircraft[]>> | null = null;
  //option 3 : aircrafts est de type observable de structure de donnée AppDataState constituée de 3 éléments facultatifs
  //le type générique ici sera dans notre cas une liste d'avions
  //cette étape est indispensable afin de permettre à pipe de renvoyer le même type de donnée pour les 3 cas d'utilisations s,m et c
  readonly dataStateEnum = DataStateEnum;

  constructor(private aircraftService:AircraftService) {}

  ngOnInit(): void {
    
  }

  getAllAircrafts() {
    //option 3 : méthode Pipe avec un ensemble d'opérateur + gestion des états du chargement des données
    //du coup, on peut appliquer un ensemble d'opérateur
    this.aircrafts$ = this.aircraftService.getAircrafts().pipe(
      map(data => ({dataState : DataStateEnum.LOADED, data : data})),
      //opérateur map reçoit une liste d'avions et retourne une fonction avec pour paramètre un objet contenant cette liste
      //il renvoi aussi une variable state qui précise l'état du chargement ici en cours
      startWith({dataState : DataStateEnum.LOADING}), // dès que pipe est appelé, le premier état est spécifié ici
      catchError(err => of({dataState : DataStateEnum.ERROR, errorMessage : err.message}))
      //là aussi on retourne une fonction qui renvoie un Observable ici grâce à la méthode of      
    );
  }

  getDesignedAircrafts() {

  }

  getDevelopmentAircrafts() {
    
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
