import {Component, Input, OnInit} from '@angular/core';
import {Movie, MoviePerson} from "../../models/movie";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.sass']
})
export class MovieDetailsComponent implements OnInit {

  @Input() movie!: Movie;

  constructor() { }

  ngOnInit(): void {
  }

  getActors(actors: MoviePerson[]): string {
    let actorList: string[] = [];

    actors.forEach((o) => {
      actorList.push(o.firstName + ' ' + o.lastName);
    })

    return actorList.join(', ').toString();
  }
}
