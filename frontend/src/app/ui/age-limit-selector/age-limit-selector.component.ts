import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AgeLimit} from "../../models/age-limit";

@Component({
  selector: 'app-age-limit-selector',
  templateUrl: './age-limit-selector.component.html',
  styleUrls: ['./age-limit-selector.component.sass']
})
export class AgeLimitSelectorComponent implements OnInit {

  ageLimits = AgeLimit;
  selectedAgeLimit: AgeLimit = AgeLimit.K12;
  @Output() ageLimit = new EventEmitter<AgeLimit>();


  constructor() {
  }

  ngOnInit(): void {
  }

  setAgeLimit(ageLimit: AgeLimit): void {
    this.selectedAgeLimit = ageLimit;
    this.ageLimit.emit(ageLimit);
  }
}
