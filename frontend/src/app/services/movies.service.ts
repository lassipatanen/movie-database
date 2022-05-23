import {Injectable} from '@angular/core';
import {MoviesHttpService} from "./movies-http.service";
import {BehaviorSubject, Observable} from "rxjs";
import {Movie} from "../models/movie";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private _movieList: BehaviorSubject<Movie[]> = new BehaviorSubject<Movie[]>([]);
  public readonly movieList: Observable<Movie[]> = this._movieList.asObservable();

  constructor(private movieHttpService: MoviesHttpService) {
  }

  getMovieList(): Observable<Movie[]> {
    return this.movieList
  }

  updateMovieList(movies: Movie[]): void {
    console.log('Movie list updated');
    this._movieList.next(movies);
  }

  getLatestMovie(): Observable<Movie> {
    return this.movieHttpService.getLatestScene();
  }

  getMovies(): void {
    this.movieHttpService.getMovies().subscribe((res) => {
      this.updateMovieList(res);
    });
  }

  save(movie: Movie): void {
    this.movieHttpService.save(movie).subscribe((res) => {
      this.getMovies();
    })
  }

  search(queryString: string): void {
    this.movieHttpService.search(queryString).subscribe((res) => {
      console.log(res);
      this.updateMovieList(res);
    });
  }
}
