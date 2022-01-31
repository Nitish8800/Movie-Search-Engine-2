
function getMovie() {
    let movie = document.getElementById("search").value;

    async function makeRequest() {
        let res = await fetch(
            `http://www.omdbapi.com/?apikey=381f166f&t=${movie}`
        );
        let data = await res.json();
        appendMovie(data);
        console.log(data);
    }
    makeRequest();
}

let movie = document.getElementById("result");

function appendMovie(movieData) {
    movie.textContent = "";
    console.log(movieData);
    if (movieData.Poster == undefined) {
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src =
            "https://media1.giphy.com/media/TqiwHbFBaZ4ti/200w.webp?cid=ecf05e47cf847n5wgobf6e6gculu9qfci73wh59f12mivl7l&rid=200w.webp&ct=g";

        div.append(img);

        movie.append(div);

        return;
    } else {
        if (movieData.Poster != "N/A") {
            div = document.createElement("div");

            image = document.createElement("img");
            image.src = movieData.Poster;

            let Year = document.createElement("h3");
            Year.innerHTML = `${movieData.Released}`;

            let title = document.createElement("h2");
            title.innerHTML = movieData.Title;

            let RateThemovie = document.createElement("h2");
            RateThemovie.innerHTML = `⭐ ${movieData.imdbRating}`;

            if (movieData.imdbRating > 8.5) {
                let re = document.createElement("button");
                re.innerHTML = "RECOMMENDED";
                re.id = "btun";

                div.append(image, title, Year, RateThemovie, re);
            } else {
                div.append(image, title, Year, RateThemovie);
            }
            movie.append(div);
        }
    }
}