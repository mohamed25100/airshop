import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Aircraft } from 'src/app/model/aircraft.model';
import { GetAircraftByMsnAction } from 'src/app/ngrx/aircrafts.actions';
import { AircraftService } from 'src/app/services/aircraft.service';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})
export class ProgramsComponent implements OnInit {

  aircraft: Aircraft[] | undefined; // L'avion à afficher
  error: string | undefined | null;

  constructor(private store: Store<any>, private route: ActivatedRoute, private aircraftService: AircraftService) { }
  
  ngOnInit(): void {
    const msn = +this.route.snapshot.paramMap.get("msn")!;

     this.getAircraft(msn);
  }

  getAircraft(msn: number): void {
    this.store.dispatch(new GetAircraftByMsnAction(msn));
      }
}
