import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoriteMoviesComponent } from './favorite-movies.component';

const routes: Routes = [{ path: '', component: FavoriteMoviesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavoriteMoviesRoutingModule { }
