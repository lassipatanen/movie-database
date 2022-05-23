import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Movie, MoviePerson} from "../../models/movie";
import {MoviesService} from "../../services/movies.service";
import {AgeLimit} from "../../models/age-limit";

@Component({
  selector: 'app-add-movie-form',
  templateUrl: './add-movie-form.component.html',
  styleUrls: ['./add-movie-form.component.sass']
})
export class AddMovieFormComponent implements OnInit {

  movie!: Movie;
  director: string = '';

  @Output() modalStateEmitter = new EventEmitter<boolean>();

  constructor(private movieService: MoviesService) {
  }

  ngOnInit(): void {
    this.movie = Movie.CreateNew();
  }

  addActor(actorTags: string): void {
    let actorArray = actorTags.split(',');

    actorArray.forEach((value) => {
      value = value.trim();
      if (value != '') {
        let firstNameAndLastName = value.split(' ');
        if (firstNameAndLastName.length == 2) {
          let newActor: MoviePerson = {
            firstName: firstNameAndLastName[0].trim(), // Here we assume people write names in firstName lastName format :)
            lastName: firstNameAndLastName[1].trim()
          }
          this.movie.actors.push(newActor); //TODO: Check if person is already on the list
        }
      }
    });
  }

  removeActor(actor: MoviePerson): void {
    let actorIndex = this.movie.actors.findIndex(o => {
      return o.firstName == actor.firstName && o.lastName == actor.lastName;
    })

    this.movie.actors.splice(actorIndex, 1);
  }

  addGenre(genreTags: string): void {
    let genreArray = genreTags.split(',');
    genreArray.forEach((genre) => {
      genre = genre.trim();
      if (genre != '') {
        this.movie.genres.push(genre);
      }
    });
  }

  removeGenre(genre: string): void {
    let index = this.movie.genres.findIndex(o => {
      return o == genre;
    });
    this.movie.genres.splice(index, 1)
  }

  saveMovie(movie: Movie, e: MouseEvent) {
    e.preventDefault();

    let directorNames = this.director.trim().split(' ');
    this.movie.director = new MoviePerson(directorNames[0], directorNames[1]);

    this.closeModal();
    this.movieService.save(movie);
  }

  formatMoviePersonName(person: MoviePerson): string {
    return person.firstName + ' ' + person.lastName;
  }

  setDirectorName(director: string) {
    let directorNames = director.trim().split(' ');
    this.movie.director = new MoviePerson(directorNames[0], directorNames[1]);
  }

  updateAgeLimit($event: AgeLimit) {
    this.movie.ageLimit = $event;
  }

  closeModal(): void {
    this.modalStateEmitter.emit(false);
  }
}
