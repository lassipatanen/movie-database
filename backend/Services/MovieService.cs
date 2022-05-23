using MovieDatabaseApi.Models;
using MovieDatabaseApi.Repositories;

namespace MovieDatabaseApi.Services;

internal class MovieService : IMovieService
{
    private readonly IMovieRepository _movieRepository;

    public MovieService(IMovieRepository movieRepository)
    {
        _movieRepository = movieRepository;
    }

    public IReadOnlyList<Movie> GetMovies()
    {
        
        var movies = _movieRepository.LoadAllMovies();

        return movies;
    }

    public Movie GetLatestMovie()
    {
        Movie movie = _movieRepository.GetLatestMovie();
        
        return movie;
    }

    public Movie CreateMovie(Movie movie)
    {
        var result = _movieRepository.Create(movie);
        return movie;
    }

    public void CreateMovies(IReadOnlyList<Movie> movies)
    {
        _movieRepository.CreateMany(movies);
    }

    public void DeleteMovie(string id)
    {
        _movieRepository.Delete(id);
    }
}