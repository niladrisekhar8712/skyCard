import React, { useState } from "react";
import WeatherForm from "./WeatherForm";
import WeatherDetails from "./WeatherDetails";
import OtherData from "./OtherData";
import HourlyForecast from "./HourlyForecast";
import DailyForecast from "./DailyForecast";
import SpecialData from "./SpecialData.jsx";
import locIcon from "./images/location-placeholder-svgrepo-com.svg"

const WeatherApp = () => {

    const [city, setCity] = useState('Paris');
    const [weatherIcon, setWeatherIcon] = useState("");
    const [hourlyData, setHourlyData] = useState(null);
    const [dailyData, setDailyData] = useState(null);
    const [localtime, setLocalTime] = useState(null);
    const [riseTime, setRiseTime] = useState(null);
    const [setTime, setSetTime] = useState(null);
    const [uv, setUv] = useState(null);




    const [isDay, setIsDay] = useState(1);
    const [cityName, setCityName] = useState(city);
    const [countryName, setCountryName] = useState("");
    const [temperature, setTemperature] = useState("");
    const [weather, setWeather] = useState("");
    const [feelsLike, setFeelsLike] = useState("");
    const [humidity, setHumidity] = useState("");
    const [visibility, setVisibility] = useState("");
    const [cloud, setCloud] = useState("");
    const [pressure, setPressure] = useState("");
    const [windSpeed, setWindSpeed] = useState("");
    const [windDirection, setWindDirection] = useState("");


    

    const handleInputChange = (e) => {
        setCity(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = "https://api.weatherapi.com/v1/forecast.json?key=75efa4ecef444031b8b162156241403&q=" + city + '&days=2';
        fetch(url).then(response => {
            if (!response.ok) {
                throw new Error("Response was not ok");
            }
            return response.json();
        }).then(data => {
            // setWeatherData(data);
            setHourlyData(data.forecast.forecastday);
            setLocalTime(data.location.localtime);

            setRiseTime(data.forecast.forecastday[0].astro.sunrise);
            setSetTime(data.forecast.forecastday[0].astro.sunset);
            setUv(data.current.uv);

            setIsDay(data.current.isDay);
            setCityName(data.location.name);
            setCountryName(data.location.country);
            setTemperature(data.current.temp_c);
            setWeather(data.forecast.forecastday[0].day.condition.text);
            setFeelsLike(data.current.feelslike_c);
            setHumidity(data.current.humidity);
            setVisibility(data.current.vis_km);
            setCloud(data.current.cloud);
            setPressure(data.current.pressure_mb);
            setWindSpeed(data.current.wind_kph);
            setWindDirection(data.current.wind_dir);
            setWeatherIcon(data.current.condition.icon);
        });

        const url2 = "https://api.tomorrow.io/v4/weather/forecast?location=" + city + "&timesteps=1d&units=metric&apikey=Ya1sPHPkqr8hzleonlCg4hMSk1QDUI0r";
        fetch(url2).then(response => {
            if (!response.ok) {
                throw new Error("Response was not ok");
            }
            return response.json();
        }).then(data => {
            setDailyData(data);
        });

    };


    return (
        <div className="main-body">
            <div className="left-right">
                <div className="left">
                    <div className="form-input">
                        <form onSubmit={handleSubmit}>
                            <img src={locIcon} alt="" className="loc-svg" />
                            <input type="text" name="cityName" placeholder="Enter City" value={city} onChange={handleInputChange} />
                            <button type="submit" className="button-86">Go</button>
                        </form>
                    </div>
                        <div>
                            <WeatherDetails
                                isDay={isDay}
                                lat={cityName}
                                lon={countryName}
                                temperature={temperature}
                                weather={weather}
                                currentIcon={weatherIcon}
                            />
                            <OtherData
                                feelsLike={feelsLike}
                                humidity={humidity}
                                visibility={visibility}
                                windSpeed={windSpeed}
                                windDirection={windDirection}
                                pressure={pressure}
                                cloud={cloud}
                            />
                        </div>
                </div>
                <div className="right">
                    <HourlyForecast
                        forecastList={hourlyData} localtime={localtime}
                    />
                    <DailyForecast dailyForecast={dailyData} />
                    <SpecialData riseTime={riseTime} setTime={setTime} uv={uv} />
                </div>
            </div>
        </div>
    );
};

export default WeatherApp;
