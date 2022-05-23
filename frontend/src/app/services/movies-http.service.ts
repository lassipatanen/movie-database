import {Injectable} from '@angular/core';
import {map, Observable} from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {Movie} from "../models/movie";

@Injectable({
  providedIn: 'root'
})
export class MoviesHttpService {
  private apiBaseUrl: string = 'http://localhost:4200/';

  constructor(private http: HttpClient) {
  }

  getLatestScene(): Observable<Movie> {
    return this.http.get(this.apiBaseUrl + 'movies/latest').pipe(map((response) => {
      return response as Movie;
    }));
  }

  getMovies() {
    return this.http.get(this.apiBaseUrl + 'movies').pipe(map((response) => {
      return response as Movie[];
    }));
  }

  save(movie: Movie): Observable<any> {
    return this.http.post(this.apiBaseUrl + 'movies', movie);
  }
}
