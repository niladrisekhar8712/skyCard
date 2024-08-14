import React from "react";
import RainIcon from "./images/rain-16.png";
const DailyForecast = ({ dailyForecast }) => {
    return (
        <div className="right-content">
            {dailyForecast && dailyForecast.timelines && dailyForecast.timelines.daily ? (
                dailyForecast.timelines.daily.slice(0, 7).map((day, index) => (
                    <div className="day" key={index}>
                        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                            <img src={RainIcon} alt="" />
                            <p style={{ margin: 0 }}>{day.values.precipitationProbabilityAvg}%</p>
                        </div>
                        <p style={{ fontWeight: "bold" }}>{Math.ceil(day.values.temperatureAvg)}°C</p>
                        <p>{`${day.time.split('T')[0].split('-')[2]}/${day.time.split('T')[0].split('-')[1]}`}</p>
                    </div>
                ))
            ) : (
                <p>No forecast data available.</p>
            )}
        </div>
    );
};

export default DailyForecast;
