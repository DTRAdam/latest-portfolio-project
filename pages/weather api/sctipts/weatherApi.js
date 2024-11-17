const API_KEY = "3d514179e2fc8e9642acf79974269b84"
const URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric&q=`
const query = document.querySelector("#inputCity");
const button = document.querySelector("button");
const cityName = document.querySelector("#city");
const temp = document.querySelector("#temp");
const description = document.querySelector("#description");
const errorMessage = document.querySelector("#errorMessage");
const weatherIcon = document.getElementById("weatherIcon");

async function getWeather(city) {
    if (city) {
        try {
            const response = await fetch(URL + city)
            const data = await response.json()
            displayWeather(data);
        } catch (error) {

        }
    }
}



function displayWeather(weatherData) {
    if (weatherData.cod === 200) {
        setTimeout(() => {
            errorMessage.textContent = "";
            cityName.textContent = weatherData.name;
            temp.textContent = weatherData.main.temp + "°";
            description.textContent = weatherData.weather[0].description
            weatherIcon.src = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
        }, 500);
        document.getElementById("container").style.height = 360 + "px"
    } else {
        cityName.textContent = "";
        temp.textContent = "";
        description.textContent = ""
        weatherIcon.src = ""
        errorMessage.textContent = weatherData.message;
    }
}




button.addEventListener("click", () => {
    getWeather(query.value);


})





