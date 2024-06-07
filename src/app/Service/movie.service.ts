import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieInt } from '../Models/movie-int';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  apiUrl:string =' http://localhost:3000/movies'

  constructor(private http:HttpClient) { }


getAll(){
  return this.http.get<MovieInt[]>(this.apiUrl)
}

getAllId(id:number){
  return this.http.get<MovieInt[]>(`${this.apiUrl}/${id}`)
}



create(newMoviesPrefer:Partial<MovieInt>){
  return this.http.post<MovieInt>(this.apiUrl,newMoviesPrefer)
}


update(movie:MovieInt){
  return this.http.put(`${this.apiUrl}/${movie.id}`,movie)
}

delete(id:number){
  return this.http.delete(`${this.apiUrl}/${id}`)

}



}