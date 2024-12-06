import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Aircraft } from '../model/aircraft.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AircraftService {

  constructor(private http:HttpClient) { }

  //liste de tous les avions en base => une fois sur 2 souhaite provoquer une erreur
  public getAircrafts():Observable<Aircraft[]> {
    let host = environment.host;
    return this.http.get<Aircraft[]>(host+"/aircrafts");
  }

  //liste des avions en phase design
  public getDesignedAircrafts():Observable<Aircraft[]>{
    return this.http.get<Aircraft[]>(environment.host+"/aircrafts?design=true");
  }

  //liste des avions en phase de développement
  public getDeveloppedAircrafts():Observable<Aircraft[]>{
    return this.http.get<Aircraft[]>(environment.host+"/aircrafts?development=true");
  }

  //renvoi un avion à partir de l'id
  public getAircraftByMsn(msn:number) : Observable<Aircraft> {
    return this.http.get<Aircraft>(`${environment.host}/aircrafts/${msn}`);
  }
  /*
  public searchAircrafts(keyword: string): Observable<Aircraft[]> {
    console.log('Service: Searching aircrafts with keyword:', keyword);
    return this.http.get<Aircraft[]>(environment.host + "/aircrafts?search=" + keyword);
  }*/
  public searchAircrafts(keyword: string): Observable<Aircraft[]> {
    return this.http
      .get<Aircraft[]>(environment.host+"/aircrafts/")
      .pipe(
        map((aircrafts) =>
          aircrafts.filter(
            (aircraft) =>
              aircraft.prog.toLowerCase().includes(keyword.toLowerCase())
          )
        )
      );
  }
}
