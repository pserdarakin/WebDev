/* Fetching, essentially, is the process of grabbing data from the database and making it available to the application.
It is not relational database.
It is Document Oriented Database
There is no rules in MongoDB

Embedded
{
    "id":"1",
    "firstName":"John",
    "lastName":"Doe",
    "locationX":45.123,
    "department": "Development",
    "role": {
        "title":"Frontend Dev",
        "salary":"50000"
    }
}

When to embed? => Embed until you have a valid reason not to!



{
    "user_id": 1,
    "userName": "moviegeek",
    "userPassword": 123456,
    "watchedList": {
        "tmdb_id": 1,
        "title": "Batman",
        "genre": "Sci-Fi",
        "year": "2009",
        "poster": "img_url",
        "reviews": "Amazing"
    }
    "wantedList": {
        "tmdb_id": 1,
        "title": "Batman",
        "genre": "Sci-Fi",
        "year": "2009",
        "poster": "img_url"
    }

}


Schema: Defines structure of particular document inside of our database.
Model: Apply that schema to the particular model and then we use that model to interact with a collection of that name.

*/

/* Moongose query/test
	•	Movie is not an array.
	•	Movie.find(...) doesn’t work like Array.find(...).
	•	Movie is a Mongoose model, and you need to use Mongoose query methods.

    const foundMovie = await Movie.findOne({ user_id: id });
    or
    const foundMovie = await Movie.findById(id);

MongoDB _id values are stored as strings, not numbers. If you’re using findById(id), make sure id is treated as a string.

*/