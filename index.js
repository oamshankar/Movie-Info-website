$("#Searchmovie").on('submit',function(e){
    var MovieName=$(".searchform").val()
    $(".backimg").addClass("blur")
    console.log(MovieName)
    getMovies(MovieName)
    e.preventDefault()

});

function getMovies(MovieName){
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://imdb8.p.rapidapi.com/auto-complete?q="+MovieName,
        "method": "GET",
        "headers": {
            "X-RapidAPI-Key": "6f7d151c9dmshf659cf6fcc98efap1bee4fjsn854dcf93697f",
            "X-RapidAPI-Host": "imdb8.p.rapidapi.com"
        }
    };
    
    $.ajax(settings).done(function (response) {
        console.log(response);
        var movies = response.d
        var output=''
        $.each(movies, (index,movie) =>{
            output += `
            <div class="col-md-3">
              <div class="well text-center">
                <img class="img" src="${movie.i.imageUrl}">
                <h5>${movie.l}</h5>
                <button class="color"><a href="https://www.imdb.com/title/${movie.id}"><span class ="text2"> Movie Details</span></a></button>
              </div>
            </div>
            `
        })
        $("#movies").html(output)
    });

}