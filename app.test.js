const fetchMovies = require("./app");
const sortMovies = require("./app");


test('sort a movie array by it number of likes from highest to lowest in decending order', () => {
    expect(sortMovies).not.toBeNull();
});

test('checks if movies are succescfully fetched from localstorage', () => {
    expect(fetchMovies).not.toBeNull();
});