import { Component, OnInit } from '@angular/core';
import { Aircraft } from 'src/app/model/aircraft.model';
import { AircraftService } from 'src/app/services/aircraft.service';

@Component({
  selector: 'app-aircrafts',
  templateUrl: './aircrafts.component.html',
  styleUrls: ['./aircrafts.component.css']
})
export class AircraftsComponent implements OnInit {
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
    /*this.aircraftService.getAircrafts().subscribe( //ecriture dépréciée
    data => { this.aircrafts = data
    }, err => {
      console.log(err)
    })*/
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
}
