# WeatherApp


## Description
This is an Android weather application that uses React Native to utilize and combine stylesheets, flex‐box, network communication, user input, and images into a simple app. This app calls current weather data by zipcode from the [Open Weather API](https://openweathermap.org/api). Source code adapted from ["Learning React Native" book by Bonnie Eisenman](https://www.imel.ba/edukacija/learningreactnative.pdf)


## Preview
<img src="https://github.com/glowfessorkingslayer/WeatherApp/blob/master/img/preview1.jpg" width="45%"/> <img src="https://github.com/glowfessorkingslayer/WeatherApp/blob/master/img/preview2.jpg" width="45%"/>


## Important Files (all in root directory)
### index.js
* Imports AppRegistry
* Imports WeatherProject component from WeatherProject.js
* Registers WeatherProject component with AppRegistry

### App.js
* Imports WeatherProject from WeatherProject.js

### open_weather_map.js
* Stores API key (sign up at [Open Weather API](https://openweathermap.org/api) website to obtain your own unique API key)
* Stores & parses API endpoint URL 
* Includes a comment for Example API calls and how to parse API endpoint URL
* Includes a comment of an example JSON file output for the zipcode of 77450
* Upon user-input of a valid zipcode, the fetchForecast() function will retrieve and return 3 properties from the JSON file provided by the OpenWeatherMap component: main (short current forecast summary), description (longer current forecast summary), temp (current temperature in degrees Fahrenheit)

### WeatherProject.js
* Main project file
* Imports Forecast component from Forest.js
* Imports OpenWeatherMap component from open_weather_map.js
* Displays content from _handleTextChange property and Forecast component in Forecast.js using render() method
* Includes stylesheet for displayed content

### Forecast.js
* Styles 3 chosen weather properties (main, description, temp)


## Execution
Navigate to the project folder in Command Line and run this code with an active Android emulator or connected Android device with the following command: npx react-native run-android
* Make sure that your instance of Node.js is included in your environment variables as the PATH variable. For example: C:\Program Files\nodejs\node_modules\npm\bin


