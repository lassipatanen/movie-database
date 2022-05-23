using MongoDB.Bson;
using MovieDatabaseApi.Models;

namespace MovieDatabaseApi.Services;

public interface IMovieService
{
    IReadOnlyList<Movie> GetMovies();
    Movie GetLatestMovie();
    Movie CreateMovie(Movie movie);
    void CreateMovies(IReadOnlyList<Movie> movies);
    void DeleteMovie(string id);
}