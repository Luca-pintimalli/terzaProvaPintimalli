import { Component } from '@angular/core';
import { UserInt } from '../../Models/user-int';
import { AuthService } from '../SERVICE/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  newUser:Partial<UserInt> = {}

  constructor(private authSvc:AuthService){}

  register(){
    this.authSvc.register(this.newUser).subscribe()
  }

}
