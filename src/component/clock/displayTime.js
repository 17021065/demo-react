import React from "react";
import withClock from "./withClock";

const DisplayTimeBase = ({time, timeHavePassed}) => {
    return <div className="homepage">
        <div>
            <h1>{time}</h1>
            <h2 className="w3-center">{timeHavePassed} seconds have passed</h2>
        </div>  
    </div>
}

const displayTime = withClock(DisplayTimeBase);

export default displayTime;