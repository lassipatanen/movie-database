using Microsoft.AspNetCore.Mvc;
using MovieDatabaseApi;
using MovieDatabaseApi.Models;
using MovieDatabaseApi.Repositories;
using MovieDatabaseApi.Services;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddSingleton<IMovieService, MovieService>();
builder.Services.AddSingleton<IMovieRepository, MovieRepository>();
builder.Services.Configure<MovieDatabaseSettings>(builder.Configuration.GetSection("MovieDatabaseSettings"));

var app = builder.Build();

app.MapGet("/movies", ([FromServices] IMovieService movieService) =>
    {
        IReadOnlyList<Movie> movies = movieService.GetMovies();
        return movies;
    })
    .WithName("GetMovies");

app.MapGet("/movies/latest", ([FromServices] IMovieService movieService) =>
    {
        var movie = movieService.GetLatestMovie();
        return movie;
    })
    .Produces(200)
    .Produces(404);

app.MapPost("/movies", ([FromBody] Movie movie, [FromServices] IMovieService movieService) =>
    {
        var result = movieService.CreateMovie(movie);
        return Results.Created($"/movies/{result.Id}", result);
    })
    .WithName("CreateMovie")
    .Produces(201);

app.MapPost("/movies/batch", ([FromBody] IReadOnlyList<Movie> movies, [FromServices] IMovieService movieService) =>
    {
        movieService.CreateMovies(movies);
        return Results.Ok();
    })
    .WithName("CreateBatchMovies")
    .Produces(201);

app.MapDelete("/movies/{id:length(24)}",
        ([FromRoute] string id, [FromServices] IMovieService movieService) => { movieService.DeleteMovie(id); })
    .WithName("DeleteMovie")
    .Produces(200);

app.Run("http://*:5211");