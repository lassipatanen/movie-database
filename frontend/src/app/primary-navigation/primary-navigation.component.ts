import {Component, OnInit} from '@angular/core';
import {faImage} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-primary-navigation',
  templateUrl: './primary-navigation.component.html',
  styleUrls: ['./primary-navigation.component.sass']
})
export class PrimaryNavigationComponent implements OnInit {

  // Icons
  faLibrary = faImage;

  constructor() {
  }

  ngOnInit(): void {
  }

}
