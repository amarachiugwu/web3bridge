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


var container = document.getElementById('movies');

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

function loadMovies() {

    let movies = fetchMovies();


    let movieBoxes = "";
    for (let index = 0; index < movies.length; index++) {
        movieBoxes += "<div class='box'><div class='img'><img src='"+movies[index].image+"'></div><h2>"+movies[index].name+"</h2><div class='like'><img  class='likeimg' src='images/like.png'><span id='0' class='likecount'>"+movies[index].likes+"</span></div></div>";
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
                 "price" : movie.price * (movie.likes + 1)
             }
             movies[id] = x;
             localStorage.setItem("movies", JSON.stringify(movies));
         }
     });
 
    //  loadMovies();    
 }

//  module.exports = addLike;