const key = 'fb52da0f86621e2d86b9adff94e2edeb'
let url = `https://api.openweathermap.org/data/2.5/weather?units=imperial&q=`
const searchBox = document.querySelector("#cityInput");
const searchBtn = document.querySelector(".search button");


async function getData(city){
  const response = await fetch(url + city + `&appid=${key}`);
  const data = await response.json();
  console.log(data);

  document.querySelector('.temp').innerHTML = data.main.temp + "°F";
  document.querySelector('.city').innerHTML = data.name;
  document.querySelector('.wind').innerHTML = data.wind.speed + " mph";
  document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
}


searchBtn.addEventListener("click", ()=>{
  getData(searchBox.value);
})


