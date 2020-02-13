/*
REACT NATIVE FETCH API
fetch('http://www.somesite.com')
    .then((response) => response.text())
    .then((responseText) => {
        console.log(responseText);
    });


*/

const WEATHER_API_KEY = "bf11253b05facb1890475107a3471d8d";
const API_STEM = "http://api.openweathermap.org/data/2.5/weather?";

//* "zip" from constructor in WeatherProject.js
function zipUrl(zip) {
    /*
        EXAMPLE API CALLS
        api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}

        api.openweathermap.org/data/2.5/weather?q={city name},{state}&appid={your api key}

        api.openweathermap.org/data/2.5/weather?q={city name},{state},{country code}&appid={your api key}
    */
    return `${API_STEM}q=${zip}&units=imperial&APPID=${WEATHER_API_KEY}`;
    /*
        EXAMPLE (Zip: 77450): http://api.openweathermap.org/data/2.5/weather?q=77450&units=imperial&APPID=bf11253b05facb1890475107a3471d8d
        JSON output
        "coord":{
            "lon":2.81,
            "lat":48.9
        },
        "weather":{
            [0]:
                "id":804,
                "main":"Clouds", (<- used for main )
                "description":"overcast clouds",
                "icon":"04n"
        },
        "base":"stations",
        "main":{
            "temp":41.52,
            "feels_like":31.86,
            "temp_min":39,
            "temp_max":44.01,
            "pressure":1016,
            "humidity":75
        },
        "visibility":10000,
        "wind":{
            "speed":11.41,
            "deg":190
        },
        "clouds":{"all":91},
        "dt":1581553812,
        "sys":{
            "type":1,
            "id":6542,
            "country":"FR",
            "sunrise":1581577307,
            "sunset":1581613463
        },
        "timezone":3600,
        "id":6457363,
        "name":"Montreuil",
        "cod":200
    */
}

function fetchForecast(zip) {
    return fetch(zipUrl(zip))    
        .then(response => response.json())    
        .then(responseJSON => {
            return {
                //properties from OpenWeatherMap API
                main: responseJSON.weather[0].main,
                description: responseJSON.weather[0].description,
                temp: responseJSON.main.temp
            };    
        })    
        .catch(error => {
            console.error(error);    
        });
}

export default { fetchForecast: fetchForecast };