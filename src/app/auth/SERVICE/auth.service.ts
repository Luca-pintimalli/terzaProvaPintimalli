import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Router } from '@angular/router';

import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { UserInt } from '../../Models/user-int';
import { AuthDataInt } from '../../Models/auth-data-int';
import { AuthResponseInt } from '../../Models/auth-response-int';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtHelper:JwtHelperService= new JwtHelperService()

  authSubject = new BehaviorSubject<null| UserInt>(null)

  syncIsLoggedIn:boolean = false 





  user$ = this.authSubject.asObservable()
  isLoggedIn$ = this.user$.pipe(map (user => !!user), 
  tap( user => this.syncIsLoggedIn = user))


  constructor(private http: HttpClient, private route:Router) { 
this.restoreUser()

  }



  loginUrl:string = "http://localhost:3000/login"
  registerUrl:string="http://localhost:3000/register"

  register(newUser:Partial<UserInt>):Observable<AuthResponseInt>{
    return this.http.post<AuthResponseInt>(this.registerUrl,newUser)

  }

  login(authData:AuthDataInt):Observable<AuthResponseInt>{
    return this.http.post<AuthResponseInt>(this.loginUrl,authData)
    .pipe(tap(data => {
      this.authSubject.next(data.user)
      localStorage.setItem('accessData',JSON.stringify(data))

      this.autoLogout()

    }))

  }

  logout():void{
    this.authSubject.next(null)
    localStorage.removeItem('accessData')
    this.route.navigate(['/auth/login'])

  }

  autoLogout():void{
    const accessData = this.getAccessData()

    if(!accessData) return;

    const expData = this.jwtHelper.getTokenExpirationDate(accessData.accessToken) as Date
    const expMs = expData.getTime() - new Date().getTime()
    setTimeout(this.logout,expMs)

  }

  restoreUser():void{

    const accessData= this.getAccessData()
    if(!accessData) return 

    if(this.jwtHelper.isTokenExpired(accessData.accessToken)) return 

    this.authSubject.next(accessData.user)

    this.autoLogout()

  }

  getAccessData():AuthResponseInt|null{
    const accessDataJson = localStorage.getItem('accessData')
    if(!accessDataJson) return null;

    const accessData:AuthResponseInt = JSON.parse(accessDataJson)
    return accessData;

  
  }
}
