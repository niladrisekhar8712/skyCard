import React from "react";

const WeatherForm = () => {
    return (
        <div className="form-input">
            <form action="/" method="post">
                <img src="css/icons/location-placeholder-svgrepo-com.svg" alt="" className="loc-svg" />
                <input type="text" name="cityName" placeholder="Enter City" />
                <button type="submit" className="button-86">Go</button>
            </form>
        </div>
    );
};

export default WeatherForm;
