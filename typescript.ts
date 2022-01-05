type DadJokeResponse ={
  id: string;
  joke: string;
  status: number;
}

type ChucknorrisResponse ={
  created_at:string;
  icon_url:string;
  id:string;
  updated_at:string;
  url:string;
  value:string;
}

function getJoke(){
  const blobs: string[] =["blob1", "blob2", "blob3", "blob4"]
  let randomIndex:number = Math.floor( Math.random() * blobs.length)
  
  if(Math.random() > .5){
    fetch('https://icanhazdadjoke.com/', {
    headers:{
      Accept: "application/json"
      }
    })
    .then(response => response.json())
    .then((data: DadJokeResponse) => {
      document.getElementById("joke").innerHTML = `"${data.joke}"`
      joke= data.joke
      let blop = document.querySelector("body")
      console.log(blop)
      blop.className = blobs[randomIndex]
    })
  }else{
    fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then((data:ChucknorrisResponse) => {
      document.getElementById("joke").innerHTML = `"${data.value}"`
      joke= data.value
      document.querySelector("body").className = blobs[randomIndex]
      
    })
  }
}


type ReportedJoke ={
  joke:string;
  date:Date;
  score:number;
}

const reportJokes:ReportedJoke[] = [];
let joke:string 
let score:number = 0


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
    reportJokes.push({
      joke,
      date: new Date(),
      score
    })
    console.log(reportJokes)
  }
})

type WeatherResponse ={
  main:{
    temp:number;
  },
  weather:{
    description:string;
    icon:string;
  }[]
}

fetch("https://api.openweathermap.org/data/2.5/weather?q=Barcelona&units=metric&apikey=2100050340613191cdf788f92f391040")
  .then(response =>response.json())
  .then( (data:WeatherResponse) => {
    const degrees= data.main.temp
    const rounded = Math.floor(degrees)
    document.querySelector(".degrees").innerHTML = `${rounded} ºC`
    document.querySelector(".weather-descript").innerHTML = `<img class="icon" src ="http://openweathermap.org/img/wn/${data.weather[0].icon}.png">`
  })





