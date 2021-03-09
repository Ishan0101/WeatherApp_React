import React , { useState } from "react";
import axios from 'axios';
import Header from './Header.js';
import Content from "./Content.js";
import WeatherSearch from "./WeatherSearch";
import WeatherData from "./WeatherData";



const Weather=()=>{
    const [weather, setWeather] = useState()
    const api_call = async (e) =>{
        e.preventDefault();
        const location = e.target.elements.location.value;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=23f5e3d47093431ffabf3d7a5fb65fa9&units=metric`;
        const request = axios.get(url);
        const response = await request;
        setWeather(response.data);
    }
    weather && console.log(weather);
    return(
        <div className = "container">
            <Header />
            <br/><br/>
            <Content>
                <WeatherSearch api_call={api_call}/>
                <br/><br/>
                <hr/>
                { weather && <WeatherData weather = {weather}/>}  
            </Content>
        </div>
    )
}

export default Weather;