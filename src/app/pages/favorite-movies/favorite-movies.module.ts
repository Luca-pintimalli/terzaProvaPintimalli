import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoriteMoviesRoutingModule } from './favorite-movies-routing.module';
import { FavoriteMoviesComponent } from './favorite-movies.component';


@NgModule({
  declarations: [
    FavoriteMoviesComponent
  ],
  imports: [
    CommonModule,
    FavoriteMoviesRoutingModule
  ]
})
export class FavoriteMoviesModule { }
