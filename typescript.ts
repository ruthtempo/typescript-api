function getJoke():void{

  if(Math.random() > .5){
    fetch('https://icanhazdadjoke.com/', {
    headers:{
      Accept: "application/json"
      }
    })
    .then(response => response.json())
    .then(data => {
      document.getElementById("joke").innerHTML = `"${data.joke}"`
      joke= data.joke
    })
  }else{
    fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(data => {
      document.getElementById("joke").innerHTML = `"${data.value}"`
      joke= data.value
    })
  }
}



const reportJokes=[];
let joke:string 
let score:number = 0
const date = new Date()

document.querySelector(".bad").addEventListener("click",function(){
 score = 1
});

document.querySelector(".ok").addEventListener("click",function(){
  score = 2
 });

 document.querySelector(".great").addEventListener("click",function(){
  score = 3
 });


document.getElementById("next").addEventListener("click", function () {
  getJoke()
  if(joke){
    reportJokes.push(
      {joke: joke,
      date: date.toISOString(),
      score: score
      }
    )
    console.log(reportJokes)
  }
  
})




fetch("https://api.openweathermap.org/data/2.5/weather?q=Barcelona&units=metric&apikey=2100050340613191cdf788f92f391040")
  .then(response =>response.json())
  .then( data => {
          document.querySelector(".degrees").innerHTML = data.main.temp  
          document.querySelector(".weather-descript").innerHTML = data.weather[0].description
        })
  .then (console.log)




