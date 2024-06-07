import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MoviesFavoriteInt} from './Models/movies-favorite';

@Injectable({
  providedIn: 'root'
})
export class MoviesFavoriteService {

  apiUrl:string =' http://localhost:3000/movies-favorite'

  constructor(private http:HttpClient) { }


getAll(){
  return this.http.get<MoviesFavoriteInt[]>(this.apiUrl)
}

getAllId(id:number){
  return this.http.get<MoviesFavoriteInt>(`${this.apiUrl}/${id}`)
}



create(newMoviesPrefer:Partial<MoviesFavoriteInt>){
  return this.http.post<MoviesFavoriteInt>(this.apiUrl,newMoviesPrefer)
}


getFavoriteByUserId(userId:number){
  return this.http.get<MoviesFavoriteInt[]>(`${this.apiUrl}/?userId=${userId}`)
}

delete(id:number){
  return this.http.delete(`${this.apiUrl}/${id}`)

}

}
