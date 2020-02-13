import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import Forecast from "./Forecast";
import OpenWeatherMap from "./open_weather_map";

class WeatherProject extends Component {
    /*Adding zipcode information to component, before render function*/
    /*Add forecast intial mock data*/
    constructor(props) {
        super(props);
        this.state = { zip: "", forecast: null };
    }

    /*handleText callback for <TextInput> component*/
    //The fat arrow allows our callback to be properly BOUNDED to component instance ('this')
    _handleTextChange = event => {
        let zip = event.nativeEvent.text;
        OpenWeatherMap.fetchForecast(zip).then(forecast => {
            console.log(forecast);
            this.setState({ forecast: forecast });
        });
    };

    render() {
        let content = null; //initilize content
        if (this.state.forecast !== null) {
            content = (
                <Forecast
                    //properties from open_weather_map.js & from OpenWeatherMap component/API
                    main={this.state.forecast.main}
                    description={this.state.forecast.description}
                    temp={this.state.forecast.temp}
                />
            );
        }
        
        // Visible content shown on app
        return (
            <View style={styles.container}> 
                {/* Adding <Text> component (text box) that displays zip code input */}
                <Text style={styles.welcome}>
                    Enter a zipcode: {this.state.zip}
                </Text> 

                {/* Allows users to enter text */}
                <TextInput
                    style={styles.input}
                    onSubmitEditing={this._handleTextChange}
                />

                 {/* Display Weather API stuff */}
                 {content}
            </View>
        );
    }  
}

/*styles for WeatherProject component*/
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#9780FF",
    },

    welcome: { 
        fontSize: 20, 
        textAlign: "center", 
        margin: 10 
    },

    input: {
        fontSize: 20,
        borderWidth: 2,
        padding: 2,
        height: 40,
        width: 100,
        textAlign: "center"
    }
});


export default WeatherProject;