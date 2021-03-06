import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models';
import {config} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<User[]>(`${'localhost:4200'}/users`);
  }

  getById(id: number) {
    return this.http.get<User>(`${'localhost:4200'}/users/${id}`);
  }
}
