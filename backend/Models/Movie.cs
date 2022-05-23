using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace MovieDatabaseApi.Models;

public class Movie
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string Id { get; set; }

    [BsonElement("name")] public string Name { get; set; }

    [BsonElement("year")] public int Year { get; set; }

    [BsonElement("genres")] public ICollection<string> Genres { get; set; }

    [BsonElement("ageLimit")] public int AgeLimit { get; set; }

    [BsonElement("rating")] public decimal Rating { get; set; }

    [BsonElement("actors")] public ICollection<Person> Actors { get; set; }

    [BsonElement("director")] public Person Director { get; set; }

    [BsonElement("synopsis")] public string Synopsis { get; set; }

    public Movie(string id, string name, int year, ICollection<string> genres, int ageLimit, decimal rating,
        ICollection<Person> actors, Person director, string synopsis)
    {
        Id = id;
        Name = name;
        Year = year;
        Genres = genres;
        AgeLimit = ageLimit;
        Rating = rating;
        Actors = actors;
        Director = director;
        Synopsis = synopsis;
    }
}

public class Person
{
    public Person(string firstName, string lastName)
    {
        FirstName = firstName;
        LastName = lastName;
    }

    [BsonElement("firstName")] public string FirstName { get; set; }
    [BsonElement("lastName")] public string LastName { get; set; }
}