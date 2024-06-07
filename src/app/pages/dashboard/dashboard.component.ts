import { Component } from '@angular/core';
import { UserInt } from '../../Models/user-int';
import { AuthService } from '../../auth/SERVICE/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  user!:UserInt



constructor(private authSvc:AuthService){}


ngOnInit(){
  this.authSvc.user$.subscribe(user => {
    if(user) this.user= user
  })
}


}
