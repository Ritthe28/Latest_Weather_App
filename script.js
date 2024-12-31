const apikey = "e545cfc883ec014d693188440f59c9ac";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox= document.querySelector(".search input")
const searchbtn= document.querySelector(".search button")
async function checkwheather(city){
    const response = await fetch(apiurl + city +`&appid=${apikey}`);
    var data =await response.json();

    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=data.main.temp + "*C";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";




 }
 searchbtn.addEventListener("click",(e)=>{
    checkwheather(searchbox.value);
 })
