import { Component } from '@angular/core';
import { AuthDataInt } from '../../Models/auth-data-int';
import { AuthService } from '../SERVICE/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {


  authData:AuthDataInt = {
    email:'',
    password:''
  }

  constructor(private authSvc:AuthService,
    private router:Router){}



  login(){
    this.authSvc.login(this.authData)
    .subscribe(()=> {
      this.router.navigate(['/dashboard'])
    })
  }

}
