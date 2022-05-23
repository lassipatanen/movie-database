export class Movie {
  id: string | undefined;
  name: string;
  year: number;
  genres: string[];
  ageLimit: number;
  rating: number;
  actors: MoviePerson[];
  director: MoviePerson;
  synopsis: string;

  constructor(name: string, year: number, genres: string[], ageLimit: number, rating: number, actors: MoviePerson[], director: MoviePerson, synopsis: string, id?: string) {
    this.id = id;
    this.name = name;
    this.year = year;
    this.genres = genres;
    this.ageLimit = ageLimit;
    this.rating = rating;
    this.actors = actors;
    this.director = director;
    this.synopsis = synopsis;
  }

  static CreateNew(){
    return new Movie('', 1900, [], 12, 3, [], MoviePerson.CreateNew(), '')
  }
}

export class MoviePerson {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  static CreateNew() {
    return new MoviePerson('James', 'Bond')
  }
}
