import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private apiService: ApiService) { }

  getUser(userName: string, password: string): Observable<User> {
    let result = undefined;

    result = this.apiService.getUser(userName, password);

    return result;
  }
}
