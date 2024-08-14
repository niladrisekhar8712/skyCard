import React from "react";

const WeatherDetails = ({ lat, lon, temperature, forecastList, weather, currentIcon }) => {
    
    return (
        <div className="weather">
            <div className="weather-left">
                <div className="location">{lat}, {lon}</div>
                <div className="temp">{parseInt(temperature)}°C</div>
                <h3>
                    {forecastList && Array.isArray(forecastList) && (
                        `${parseInt(forecastList[0].day.mintemp_c)} ~ ${parseInt(forecastList[0].day.maxtemp_c)}°C`
                    )}
                </h3>
                <h3><p className="condition">{weather}</p></h3>
            </div>
            <div className="weather-right">
                    <img src={"https:"+currentIcon} alt="" className="weather-icon" />
            </div>
        </div>
    );
};

export default WeatherDetails;
