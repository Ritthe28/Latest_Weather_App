var input = document.querySelector("input");
var btn = document.querySelector("button");
var temp = document.querySelector(".reading");
var speed= document.querySelector(".spr");
var humidity= document.querySelector(".hr")
var rand = document.querySelector(".name")
var img = document.querySelector(".temp img");


temp.style.fontSize="45px";
const apikey = "e545cfc883ec014d693188440f59c9ac";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
btn.addEventListener("click", async (e)=>{
    if (input.value==''){
        alert("please enter a city name ");

    }
    else {
        // alert("please enter a city name ");
        var fullid= apiurl+input.value+`&appid=${apikey}`;
        var response = await fetch(fullid);
        var data = await response.json();
        console.log(data);
        temp.innerHTML=data.main.temp+"°C";
        speed.innerHTML=data.wind.speed+"km/hr";
        humidity.innerHTML=data.main.humidity+"%";
        rand.innerHTML=input.value;
        // img.src='images/img/drizzle.png'
    


    }
})
