function getJoke() {
    fetch('https://icanhazdadjoke.com/', {
        headers: {
            Accept: "application/json"
        }
    }).then((response)=>response.json()
    ).then((data)=>{
        document.getElementById("joke").innerHTML = `"${data.joke}"`;
        joke = data.joke;
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

//# sourceMappingURL=index.eddff976.js.map
