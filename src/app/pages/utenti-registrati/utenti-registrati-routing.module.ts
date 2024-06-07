import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UtentiRegistratiComponent } from './utenti-registrati.component';

const routes: Routes = [{ path: '', component: UtentiRegistratiComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtentiRegistratiRoutingModule { }
