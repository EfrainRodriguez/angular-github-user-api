import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers(per_page: number | string): Observable<User[]> {
    return this.http.get<User[]>(
      `https://api.github.com/users?per_page=${per_page}`
    );
  }
}
