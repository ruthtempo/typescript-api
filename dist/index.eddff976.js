function getJoke() {
    const blobs = [
        "blob1",
        "blob2",
        "blob3",
        "blob4"
    ];
    let randomIndex = Math.floor(Math.random() * blobs.length);
    console.log(randomIndex);
    if (Math.random() > 0.5) fetch('https://icanhazdadjoke.com/', {
        headers: {
            Accept: "application/json"
        }
    }).then((response)=>response.json()
    ).then((data)=>{
        document.getElementById("joke").innerHTML = `"${data.joke}"`;
        joke = data.joke;
        let blop = document.querySelector("body");
        console.log(blop);
        blop.className = blobs[randomIndex];
    });
    else fetch('https://api.chucknorris.io/jokes/random').then((response)=>response.json()
    ).then((data)=>{
        document.getElementById("joke").innerHTML = `"${data.value}"`;
        joke = data.value;
        document.querySelector("body").className = blobs[randomIndex];
    });
}
const reportJokes = [];
let joke;
let score = 0;
const date = new Date();
document.querySelector(".bad").addEventListener("click", function() {
    score = 1;
});
document.querySelector(".ok").addEventListener("click", function() {
    score = 2;
});
document.querySelector(".great").addEventListener("click", function() {
    score = 3;
});
document.getElementById("next").addEventListener("click", function() {
    getJoke();
    if (joke) {
        reportJokes.push({
            joke: joke,
            date: date.toISOString(),
            score: score
        });
        console.log(reportJokes);
    }
});
fetch("https://api.openweathermap.org/data/2.5/weather?q=Barcelona&units=metric&apikey=2100050340613191cdf788f92f391040").then((response)=>response.json()
).then((data)=>{
    const degrees = data.main.temp;
    const rounded = Math.floor(degrees);
    document.querySelector(".degrees").innerHTML = `${rounded} ºC`;
    document.querySelector(".weather-descript").innerHTML = `<img class="icon" src ="http://openweathermap.org/img/wn/${data.weather[0].icon}.png">`;
});

//# sourceMappingURL=index.eddff976.js.map
