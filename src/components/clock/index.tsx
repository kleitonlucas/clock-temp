import { useState } from "react";
import * as C from "./style";

export const Clock = () => {
    const [clock, setClock] = useState<Date>(new Date);
    let hour = clock.getHours();
    let minute = clock.getMinutes();
    let second = clock.getSeconds();

    const updateClock = () => {
        let now = new Date();
        setClock(now);
    }

    const startClock = () => {
        setInterval(updateClock, 1000);
    }

    return (
        <C.Clock>
            <h1>
                {hour<10?'0'+hour:hour}:{minute<10?'0'+minute:minute}:{second<10?'0'+second:second}
            </h1>
            {startClock()}
        </C.Clock>
    );
}