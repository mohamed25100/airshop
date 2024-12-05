import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  error: string | null = null;

  constructor(private http: HttpClient) { }

  getUser(userName: string, password: string) {
    return this.http.get<User[]>(environment.host + "/users?userName=" + encodeURI(userName) + "&password=" + encodeURI(password)).pipe(map(users => users.length > 0 ? users[0] : undefined) );
  }
}
