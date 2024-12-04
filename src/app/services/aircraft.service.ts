import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
  public getDevelopmentAircrafts():Observable<Aircraft[]>{
    return this.http.get<Aircraft[]>(environment.host+"/aircrafts?development=true");
  }

  //renvoi un avion à partir de l'id
  public getAircraftByMsn(id:number) : Observable<Aircraft> {
    return this.http.get<Aircraft>(environment.host + "/aircrafts/" + id);
  }
}
