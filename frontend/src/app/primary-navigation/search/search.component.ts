import { Component, OnInit } from '@angular/core';
import {faImage} from "@fortawesome/free-solid-svg-icons";
import {MoviesService} from "../../services/movies.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  // Icons
  faLibrary = faImage;

  query: string = '';

  constructor(private movieService: MoviesService) { }

  ngOnInit(): void {
  }

  doSearch(queryString: string) {
    this.movieService.search(queryString);
  }
}
