import React from 'react'

const WeatherData =(props)=>{
    return(
        <div className="container">
            <div className="cards">
                <h1>{props.weather.name}</h1>
                <picture className="py-4"><img src={`http://openweathermap.org/img/w/${props.weather.weather[0].icon}.png`}/></picture>
                <h4 className="py-4">{props.weather.main.temp}&deg;C</h4>
                <div>
                    <span className="px-4">Min : {props.weather.main.temp_min}&deg;C</span>
                    <span className="px-4">Max : {props.weather.main.temp_max}&deg;C</span>
                </div>
                <h4 className="py-4">{props.weather.weather[0].main}</h4>
            </div>
        </div>
    )

}

export default WeatherData