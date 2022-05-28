const MOVIES = [
    {
        "id" : 0,
        "name" : "The Redemption",
        "likes" : 0,
        "image" : "images/0.jpg",
        "price" : 3
    },
    {
        "id" : 1,
        "name" : "Africa’s Tech Roots",
        "likes" : 0,
        "image" : "images/1.jpg",
        "price" : 5
    },
    {
        "id" : 2,
        "name" : "The Invisible Man",
        "likes" : 0,
        "image" : "images/2.jpg",
        "price" : 15
    },{
        "id" : 3,
        "name" : "The Complicated Project",
        "likes" : 0,
        "image" : "images/3.jpg",
        "price" : 7
    },
    {
        "id" : 4,
        "name" : "Simply Javascript",
        "likes" : 0,
        "image" : "images/4.jpg",
        "price" : 50
    },
    {
        "id" : 5,
        "name" : "The New Web",
        "likes" : 0,
        "image" : "images/5.jpg",
        "price" : 10
    }
];

function fetchMovies () {
    if (localStorage.movies) {
        let movies = JSON.parse(localStorage.getItem("movies"));
        return movies;
    } else {
        localStorage.setItem("movies", JSON.stringify(MOVIES));
        let movies = JSON.parse(localStorage.getItem("movies"));
        return movies;
    }
}

function sortMovies (movies, size) 
{
    for (let step = 0; step < (size - 1); ++step) {
        let swapped = 0;
        for (let i = 0; i < (size - step - 1); ++i) {

            if (movies[i].likes < movies[i + 1].likes) {
                
                let temp;
                temp = movies[i];
                movies[i] = movies[i + 1];
                movies[i + 1] = temp;

                swapped = 1;
            }
        }

        if (swapped == 0) {
            break;
        }
    }return movies;
};

function loadMovies() {
    let container = document.getElementById('movies');
    let movies = fetchMovies();
    let size = Object.keys(movies).length;

    let sorted = sortMovies(movies, size);

    let movieBoxes = "";
    for (let index = 0; index < sorted.length; index++) {
        movieBoxes += "<div class='box'><div class='img'><img src='"+sorted[index].image+"'></div><h2>"+sorted[index].name+"</h2><h4>$ "+sorted[index].price+"</h4><div class='like'><img  class='likeimg' src='images/like.png' id='"+sorted[index].id+"'><span class='likecount'>"+sorted[index].likes+"</span></div></div>";
    }
    
    container.innerHTML = movieBoxes;
}

function addLike(id) {

   let movies = fetchMovies();

    movies.map((movie) => {
        if(movie.id == id){
            let x = 
            {
                ...movie,
                "likes" : movie.likes + 1 ,
                "price" : movie.price + (movie.likes + 1)
            }
            movies[id] = x;
            localStorage.setItem("movies", JSON.stringify(movies));
        }
    });

    loadMovies();    
}

module.exports = fetchMovies;
module.exports = sortMovies;
