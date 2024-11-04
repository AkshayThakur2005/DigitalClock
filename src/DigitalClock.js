import React, { useEffect, useState } from 'react';
import './DigitalClock.css'; 

const DigitalClock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const formatTime = (date) => {
        return date.toLocaleTimeString(); 
    };

    return (
        <div className="clock-container">
            <h1 className="clock">{formatTime(time)}</h1>
        </div>
    );

return (
    <div className="clock-container1">
        <h1 className="heading">Digital Clock</h1> 
        <h1 className="clock">{formatTime(time)}</h1>
    </div>
);

};



export default DigitalClock;