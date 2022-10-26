// api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}

const weatherApi = {
  key: "bab281d79e5f1e9755a68d754cc313e7",
  baseUrl: "https://api.openweathermap.org/data/2.5/weather",
};

const searchInputBox = document.getElementById("input-box");

// Event Listener Function on keypress
searchInputBox.addEventListener("keypress", (event) => {
  if (event.keyCode == 13) {
    console.log(searchInputBox.value);
    getWeatherReport(searchInputBox.value);
    document.querySelector(".weather-body").style.display = "block";
  }
});

// Get Weather Report
function getWeatherReport(city) {
        
  // let {latitude,longitude}= success.coords;
  fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then((weather) => {
      return weather.json();
    })
    .then(showWeatherReport);
}

// Show Weather Report
function showWeatherReport(weather) {
  console.log(weather);

  let city = document.getElementById("city");
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  let temperature = document.getElementById("temp");
  temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

  

  let minMaxTemp = document.getElementById("min-max");
  minMaxTemp.innerHTML = `${Math.floor(
    weather.main.temp_min
  )}&deg;C (min)/ ${Math.ceil(weather.main.temp_max)}&deg;C (max) `;

  let weatherType = document.getElementById("weather");
  weatherType.innerText = `${weather.weather[0].main}`;

  let date = document.getElementById("date");
  let todayDate = new Date();
  date.innerText = dateManage(todayDate);

  if (weatherType.textContent == "Clear") {
    document.body.style.backgroundImage =
      "url('https://images.unsplash.com/photo-1601297183305-6df142704ea2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2xlYXIlMjBza3l8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60')";
  } else if (weatherType.textContent == "Clouds") {
    document.body.style.backgroundImage =
      "url('https://images.unsplash.com/photo-1599209248411-5124adbb1da2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGNsb3Vkc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60')";
  } else if (weatherType.textContent == "Haze") {
    document.body.style.backgroundImage =
      "url('https://images.unsplash.com/photo-1423209086112-cf2c8acd502f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aGF6ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60')";
  } else if (weatherType.textContent == "Rain") {
    document.body.style.backgroundImage =
      "url('https://images.unsplash.com/photo-1496034663057-6245f11be793?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHJhaW58ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60')";
  } else if (weatherType.textContent == "Snow") {
    document.body.style.backgroundImage =
      "url('https://images.unsplash.com/photo-1510865159849-074d78c1690a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODF8fHNub3d8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60')";
  } else if (weatherType.textContent == "Mist") {
    document.body.style.backgroundImage =
      "url('https://images.unsplash.com/photo-1614806746712-9e869976f500?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fG1pc3R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60')";
  } else if (weatherType.textContent == "Thunderstorm") {
    document.body.style.backgroundImage =
      "url('https://images.unsplash.com/photo-1585074245728-eedb0cc44a66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHRodW5kZXJzdG9ybXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60')";
  }
}

// Date manage
function dateManage(dateArg) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let year = dateArg.getFullYear();
  let month = months[dateArg.getMonth()];
  let date = dateArg.getDate();
  let day = days[dateArg.getDay()];

  return `${date} ${month} (${day}), ${year}`;
}

let currentWeatherItemsEl = document.getElementById("current-weather-items");
function showWeatherData(data) {
  let { humidity, pressure, sunrise, sunset, wind_speed } = data.current;

  timezone.innerHTML = data.timezone;
  // countryEl.innerHTML = data.lat + "N " + data.lon + "E";

  currentWeatherItemsEl.innerHTML = `<div class="weather-item">
     <div class="w-humid">
        
     <img src="https://img.icons8.com/external-flaticons-flat-flat-icons/2x/external-humidity-plants-flaticons-flat-flat-icons-2.png" alt="humid" class="humid">
     <div>Humidity</div>
     <div>${humidity}%</div>
    </div>
    </div>
    
    <div class="weather-item">
        <div class="pressure">
        <img src="https://cdn-icons-png.flaticon.com/128/1808/1808263.png" alt="pressure" class="press_ure">
        <div>Pressure</div>
        <div>${pressure}</div>
       
    </div>
     </div>

     <div class="weather-item">
     <div class="wind-speed">
         <img src="https://cdn-icons-png.flaticon.com/128/5532/5532989.png" alt="w-speed" class="w-speed">
         <div>Wind Speed</div>
     <div>${wind_speed}</div>
     
    </div>
    </div>


    <div class="weather-item">
        <div class="sunrise">
            <img src="https://cdn-icons-png.flaticon.com/128/3222/3222792.png" alt="s-rise" class="s-rise">
            <div>Sunrise</div>
      <div>${window.moment(sunrise * 1000).format("HH:mm a")}</div>
      
     </div>
     </div>

     <div class="weather-item">
     <div class="sunset">
         <img src="https://cdn-icons-png.flaticon.com/128/3222/3222795.png" alt="s-set" class="s-set">
         <div>Sunset</div>
     <div>${window.moment(sunset * 1000).format("HH:mm a")}</div>
     
   </div>
    </div>
    
    
    `;
}
