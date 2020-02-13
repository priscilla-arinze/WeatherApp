/**
 * @format
 */

/* ORIGINAL
import {AppRegistry} from 'react-native';
import WeatherProject from './App';
import {name as appName} from './app.json';
AppRegistry.registerComponent(appName, () => App);
*/


import {AppRegistry} from "react-native";
import WeatherProject from "./WeatherProject.js";
AppRegistry.registerComponent("WeatherProject", () => WeatherProject);