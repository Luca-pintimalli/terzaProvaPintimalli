import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserInt } from '../Models/user-int';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl:string =' http://localhost:3000/users'

  constructor(private http: HttpClient) { }



  getUsers(): Observable<UserInt[]> {
    return this.http.get<UserInt[]>(this.apiUrl);
  }
}
