const sortMovies = require("./app");
const fetchMovies = require("./app");

const MOVIES = [
    {
        "id" : 0,
        "name" : "The Redemption",
        "likes" : 5,
        "image" : "images/0.jpg",
        "price" : 3
    },
    {
        "id" : 1,
        "name" : "Africa’s Tech Roots",
        "likes" : 8,
        "image" : "images/1.jpg",
        "price" : 5
    },
    {
        "id" : 2,
        "name" : "The Invisible Man",
        "likes" : 2,
        "image" : "images/2.jpg",
        "price" : 15
    },
    {
        "id" : 3,
        "name" : "The Complicated Project",
        "likes" : 4,
        "image" : "images/3.jpg",
        "price" : 7
    },
    {
        "id" : 4,
        "name" : "Simply Javascript",
        "likes" : 10,
        "image" : "images/4.jpg",
        "price" : 50
    },
    {
        "id" : 5,
        "name" : "The New Web",
        "likes" : 4,
        "image" : "images/5.jpg",
        "price" : 10
    }
];

const sortmovies = sortMovies(MOVIES, 6);

const fetchmovies = fetchMovies();

test('check if fetchMovies exsists', () => { 
    expect(fetchmovies).not.toBeNull();
 });

test('check if sortMovies exsists', () => {
    expect(sortmovies).toBeDefined();
});

test('sort a movies by its number of likes from highest to lowest in decending order', () => {
    expect(sortmovies).toEqual([
        {
            "id" : 4,
            "name" : "Simply Javascript",
            "likes" : 10,
            "image" : "images/4.jpg",
            "price" : 50
        },
        {
            "id" : 1,
            "name" : "Africa’s Tech Roots",
            "likes" : 8,
            "image" : "images/1.jpg",
            "price" : 5
        },
        {
            "id" : 0,
            "name" : "The Redemption",
            "likes" : 5,
            "image" : "images/0.jpg",
            "price" : 3
        },
        {
            "id" : 3,
            "name" : "The Complicated Project",
            "likes" : 4,
            "image" : "images/3.jpg",
            "price" : 7
        },
        {
            "id" : 5,
            "name" : "The New Web",
            "likes" : 4,
            "image" : "images/5.jpg",
            "price" : 10
        },
        {
            "id" : 2,
            "name" : "The Invisible Man",
            "likes" : 2,
            "image" : "images/2.jpg",
            "price" : 15
        }
    ]);
});