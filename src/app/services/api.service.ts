import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {

  }

  public getUser(userName: string, password: string): Observable<User> {
    return this.http.get<User>(environment.host + "/users?userName=" + encodeURI(userName) + "&password=" + encodeURI(password));
  }
}
