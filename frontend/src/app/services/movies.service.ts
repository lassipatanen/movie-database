import {Injectable} from '@angular/core';
import {MoviesHttpService} from "./movies-http.service";
import {Observable} from "rxjs";
import {Movie} from "../models/movie";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private movieHttpService: MoviesHttpService) {
  }

  getLatestMovie(): Observable<Movie> {
    return this.movieHttpService.getLatestScene();
  }

  getMovies(): Observable<Movie[]> {
    return this.movieHttpService.getMovies();
  }

  save(movie: Movie): Observable<any> {
    return this.movieHttpService.save(movie)
  }
}
