import {Component, OnInit} from '@angular/core';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import {Movie} from "../models/movie";
import {MoviesService} from "../services/movies.service";



@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.sass']
})
export class MoviesPageComponent implements OnInit {

  // icons
  faCirclePlus = faCirclePlus;

  movies!: Movie[];
  isAddMoviePanelVisible: boolean = false;

  constructor(private movieService: MoviesService) {
  }

  ngOnInit(): void {
    this.loadMovies();
  }

  toggleMoviePanel(state: boolean): void {
    this.isAddMoviePanelVisible = state;
    if (!state) {
      this.loadMovies();
    }
  }

  loadMovies(): void {
    this.movieService.getMovies().subscribe((movies) => {
      if (movies !== undefined) {
        this.movies = movies;
      }
    });
  }
}
