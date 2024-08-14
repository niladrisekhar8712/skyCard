import React from "react";

const OtherData = ({ feelsLike, humidity, visibility, windSpeed, windDirection, pressure, cloud }) => {
    return (
        <div className="other-data">
            <div className="grid-item">
                <div className="extra-heading">FEELS LIKE</div>
                <div className="extra">{Math.floor(feelsLike)}°C</div>
            </div>
            <div className="grid-item">
                <div className="extra-heading">HUMIDITY</div>
                <div className="extra" style={{ fontSize: "15px" }}>
                    <div className="pie" style={{ "--p": humidity, "--c": "darkblue", "--b": "2px" }}>
                        {humidity}%
                    </div>
                </div>
            </div>
            <div className="grid-item">
                <div className="extra-heading">VISIBILITY</div>
                <div className="extra">{visibility} km</div>
            </div>
            <div className="grid-item">
                <div className="extra-heading">WIND</div>
                <div className="extra" style={{ fontSize: "25px" }}>{windSpeed}km/h</div>
                <div style={{ fontSize: "15px", textAlign: "center" }}>{windDirection}</div>
            </div>
            <div className="grid-item">
                <div className="extra-heading">PRESSURE</div>
                <div className="extra" style={{ fontSize: "25px" }}>{pressure}mb</div>
            </div>
            <div className="grid-item">
                <div className="extra-heading">CLOUD</div>
                <div className="extra" style={{ fontSize: "15px" }}>
                    <div className="pie" style={{ "--p": cloud, "--c": "darkblue", "--b": "2px" }}>
                        {cloud}%
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OtherData;
