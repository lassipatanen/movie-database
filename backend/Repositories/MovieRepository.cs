using Microsoft.Extensions.Options;
using MongoDB.Bson;
using MongoDB.Driver;
using MovieDatabaseApi.Models;

namespace MovieDatabaseApi.Repositories;

internal class MovieRepository : IMovieRepository
{
    private readonly IMongoCollection<Movie> _movieCollection;

    public MovieRepository(IOptions<MovieDatabaseSettings> settings)
    {
        var mongoClient = new MongoClient(settings.Value.ConnectionString);
        var mongoDatabase = mongoClient.GetDatabase(settings.Value.DatabaseName);
        _movieCollection = mongoDatabase.GetCollection<Movie>(settings.Value.MoviesCollectionName);
    }

    public IReadOnlyList<Movie> LoadAllMovies()
    {
        var movies = _movieCollection.Find(_ => true).SortByDescending(m => m.Id).ToList();
        
        return movies;
    }

    public object Create(Movie movie)
    {
        _movieCollection.InsertOne(movie);
        var lastInsertedMovie = _movieCollection.Find(_ => true).SortByDescending(m => m.Id).Limit(1).FirstOrDefault();

        return lastInsertedMovie;
    }

    public void CreateMany(IReadOnlyList<Movie> movies)
    {
        _movieCollection.InsertMany(movies);
    }

    public Movie GetLatestMovie()
    {
        var movie = _movieCollection.Find(_ => true).SortByDescending(m => m.Id).Limit(1).FirstOrDefault();

        return movie;
    }

    public void Delete(string id)
    {
        _movieCollection.DeleteOne(m => m.Id == id);
    }
}