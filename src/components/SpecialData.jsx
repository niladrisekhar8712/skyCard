import React from "react";
import Sunset from "./images/sunset.png";
import Sunrise from "./images/sunrise.png";
import UV from "./images/uv.png";
const SpecialData = ({ riseTime, setTime, uv }) => {
    return (
        <div className="right-content" id="special">
            <div className="right-content-1">
                <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                    <img src={Sunrise} alt="No pic found" className="sunrise" />
                </div>
                <div className="extra" style={{ fontSize: "20px" }}>{riseTime}</div>
            </div>
            <div className="right-content-2">
                <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                    <img src={Sunset} alt="No pic found" className="sunset" />
                </div>
                <div className="extra" style={{ fontSize: "20px" }}>{setTime}</div>
            </div>
            <div className="right-content-3">
                <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                    <img src={UV} alt="No pic found" style={{ height: "64px" }} />
                </div>
                <div className="extra" style={{ fontSize: "20px" }}>{parseInt(uv)}</div>
            </div>
        </div>
    );
};

export default SpecialData;
