import React from "react"

const WeatherSearch =(props)=>{
    return(
        <div className="weather-search">
            <form onSubmit={props.api_call}>
                <input type="text" name="location"/>
                <button>&rarr;</button>
            </form>
        </div>
    )
}

export default WeatherSearch