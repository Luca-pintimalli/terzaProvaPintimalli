import { Component } from '@angular/core';
import { UserInt } from '../../Models/user-int';
import { AuthService } from '../../auth/SERVICE/auth.service';

@Component({
  selector: 'app-utenti-registrati',
  templateUrl: './utenti-registrati.component.html',
  styleUrl: './utenti-registrati.component.scss'
})
export class UtentiRegistratiComponent {




  user!:UserInt



constructor(private authSvc:AuthService){}


}
