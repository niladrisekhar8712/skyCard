import React from "react";

const HourlyForecast = ({ forecastList, localtime }) => {
    const renderHourly = () => {
        if (forecastList && Array.isArray(forecastList)) {
            const hourArray = forecastList[0].hour;
            let count = 1;
            let hour = parseInt(localtime.split(' ')[1].split(':')[0]);
            let elements = [];

            for (let i = 0; i < hourArray.length && count <= 5; i++) {
                if (hourArray[i].time.split(' ')[1].split(':')[0] > hour && hourArray[i].time.split(' ')[1].split(':')[0] <= hour + 15) {
                    elements.push(
                        <div className="hour" key={count}>
                            <img src={`https://${hourArray[i].condition.icon}`} alt="" />
                            <h3 style={{ margin: 0 }}>{Math.floor(hourArray[i].temp_c)}°C</h3>
                            <p>{hourArray[i].time.split(' ')[1]}</p>
                        </div>
                    );
                    count++;
                }
            }

            if (count <= 5) {
                for (let i = 0; count <= 5; i++) {
                    elements.push(
                        <div className="hour" key={count}>
                            <img src={`https://${forecastList[1].hour[i].condition.icon}`} alt="" />
                            <h3 style={{ margin: 0 }}>{Math.floor(forecastList[1].hour[i].temp_c)}°C</h3>
                            <p>{forecastList[1].hour[i].time.split(' ')[1]}</p>
                        </div>
                    );
                    count++;
                }
            }
            return elements;
        }
        return <p>No forecast data available.</p>;
    };

    return (
        <div className="right-content">
            {renderHourly()}
        </div>
    );
};

export default HourlyForecast;
