using MongoDB.Bson;
using MovieDatabaseApi.Models;

namespace MovieDatabaseApi.Repositories;

public interface IMovieRepository
{
    public IReadOnlyList<Movie> LoadAllMovies();
    object Create(Movie movie);
    void CreateMany(IReadOnlyList<Movie> movies);
    Movie GetLatestMovie();
    void Delete(string id);
}