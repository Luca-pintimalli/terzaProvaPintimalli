import { Component } from '@angular/core';
import { MovieService } from '../../Service/movie.service';
import { MoviesFavoriteInt } from '../../Models/movies-favorite';
import { MovieInt } from '../../Models/movie-int';
import { MoviesFavoriteService } from '../../Service/movies-favorite.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent {

  movie:MovieInt[]=[]
  moviePref:MoviesFavoriteInt[]=[]

  constructor(
    private movieSvc:MovieService,
    private moviePrefSvc:MoviesFavoriteService){}


    ngOnInit(){
      this.movieSvc.getAll().subscribe(movie => {
        this.movie = movie
        this.moviePrefSvc.getAll().subscribe(moviePref => {
          this.moviePref = moviePref
        } )
      })
    }


    toggleFavorite(movie:MovieInt){
      const obj:Partial<MoviesFavoriteInt> = {
        userId:1,
        movie:movie
      }
    }

}
