import { useEffect, useState } from "react";
import { lato } from "../fonts";

export function Countdown() {
    const [time, setTime] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const countDownDate = new Date("June 20, 2026 18:00:00").getTime();

        const interval = setInterval(() => {
            const now = Date.now();
            const distance = countDownDate - now;

            if (distance < 0) {
                clearInterval(interval);
                return;
            }

            setTime({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000),
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div id="timer" className={`${lato.className} grid grid-cols-4 gap-2 my-5 text-amber-900 text-3xl md:text-4xl lg:text-5xl xl:text-6xl`}>
            <div className="bg-amber-50 text-center rounded-lg p-2">
                {time.days}
                <div className="text-sm">Dias</div>
            </div>
            <div className="bg-amber-50 text-center rounded-lg p-2 ">
                {time.hours}
                <div className="text-sm">Horas</div>
            </div>
            <div className="bg-amber-50 text-center rounded-lg p-2 ">
                {time.minutes}
                <div className="text-sm">Minutos</div>
            </div>
            <div className="bg-amber-50 text-center rounded-lg p-2 ">
                {time.seconds}
                <div className="text-sm">Segundos</div>
            </div>
        </div>
    );
}
