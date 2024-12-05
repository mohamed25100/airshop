import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StateObservable, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GetAircraftByMsnAction } from 'src/app/ngrx/aircrafts.actions';
import { AircraftsState, AircraftsStateEnum } from 'src/app/ngrx/aircrafts.state';
import { AircraftService } from 'src/app/services/aircraft.service';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})
export class ProgramsComponent implements OnInit {

  aircraftsState$: Observable<AircraftsState> | null = null; // L'avion à afficher dataState?
  readonly aircraftsStateEnum = AircraftsStateEnum; 

  constructor(private store: Store<any>, private route: ActivatedRoute, private aircraftService: AircraftService) { }
  
  ngOnInit(): void {
    const msn = +this.route.snapshot.paramMap.get("msn")!;

     this.getAircraft(msn);
  }

  getAircraft(msn: number): void {
    this.store.dispatch(new GetAircraftByMsnAction(msn));
      }
}
