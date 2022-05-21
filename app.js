function addLike(id) {
    if (localStorage.getItem("myVideos")) {
        let myVideos_deserialized = JSON.parse(localStorage.getItem("myVideos"));   
        console.log(myVideos_deserialized);
        let likeCount = myVideos_deserialized[id];
        let count = likeCount + 1; 
        myVideos_deserialized.id = count;
        localStorage.myVideos[id] = count;
        // localStorage.setItem("myVideos", myVideos_serialized);
        console.log(myVideos_deserialized.id)  
    } else {

        var myVideos = {
            1 : 0,
            2 : 0,
            3 : 0,
            4 : 0,
            5 : 0,
            6 : 0,
        }

        let myVideos_serialized = JSON.stringify(myVideos);
        localStorage.setItem("myVideos", myVideos_serialized);
        console.log(myVideos);
        console.log(myVideos_serialized);
        
    }
    
    
    
}