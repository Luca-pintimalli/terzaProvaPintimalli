import { Component } from '@angular/core';
import { UserInt } from '../../Models/user-int';
import { UserService } from '../../Service/user.service';

@Component({
  selector: 'app-utenti-registrati',
  templateUrl: './utenti-registrati.component.html',
  styleUrl: './utenti-registrati.component.scss'
})
export class UtentiRegistratiComponent {




  user:UserInt [] = [];



constructor(private userSvc:UserService){}



ngOnInit(){
  this.loadUsers()
}


loadUsers() {
  this.userSvc.getUsers().subscribe(
    (data: UserInt[]) => {
      this.user = data;
    })



  }

}
