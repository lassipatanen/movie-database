import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FaIconLibrary, FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {MoviesPageComponent} from './movies-page/movies-page.component';
import {PrimaryNavigationComponent} from './primary-navigation/primary-navigation.component';
import {HttpClientModule} from "@angular/common/http";
import { MovieDetailsComponent } from './movies-page/movie-details/movie-details.component';
import { AddMovieFormComponent } from './ui/add-movie-form/add-movie-form.component';
import { AgeLimitSelectorComponent } from './ui/age-limit-selector/age-limit-selector.component';
import { FormsModule } from '@angular/forms';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [
    AppComponent,
    MoviesPageComponent,
    PrimaryNavigationComponent,
    MovieDetailsComponent,
    AddMovieFormComponent,
    AgeLimitSelectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(fasStar, farStar);
  }
}
