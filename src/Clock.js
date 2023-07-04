import { useState, useEffect } from "react";

export default function Clock() {

    const [date, setDate ] = useState(new Date());

    function refreshClock() {
    setDate(new Date());
    }

    useEffect(() => {
        const timerId = setInterval(refreshClock, 1000);
        return function cleanup() {
            clearInterval(timerId);
          };
    }, [] );

    return( 
        <>
        <center>
            <h1>Clock App</h1>
            <span>{date.toLocaleTimeString()}</span>
	    
        </center>
        </>
    );
}