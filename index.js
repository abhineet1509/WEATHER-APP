const apikey="c8ad84b7f128aea253bc765c2c24fc63";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
async function checkWeather(city){
    const response = await fetch(apiurl+ city+`&appid=${apikey}`);
    var data = await response.json();
    console.log(data);
    
    document.querySelector(".city").innerHTML=data.name; /*it will update the city name*/
    document.querySelector(".temp").innerHTML=data.main.temp+"°c"; /*Math.round(data.main.temp) to round off decimal digits*/
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";
}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})
