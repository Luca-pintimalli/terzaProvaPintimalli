import { Component } from '@angular/core';
import { UserInt } from '../../Models/user-int';
import { AuthService } from '../SERVICE/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  newUser:Partial<UserInt> = {}
 
  constructor(private authSvc:AuthService,
    private router:Router){} 

  register(){
    this.authSvc.register(this.newUser)
    .subscribe(()=> {
      this.router.navigate(['/dashboard'])
    })
  }

}


