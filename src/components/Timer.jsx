import { useEffect, useState } from "react";

export default function Timer() {

    const [type, setType] = useState('focus');
    const [time, setTime] = useState(1500);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let intervalId;
        if (isRunning) {
            intervalId = setInterval(() => {
                setTime(prevTime => prevTime - 1);
            }, 1000);
        }
        return () => clearInterval(intervalId);
    }, [isRunning]);

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    function onHandleClickStartStop() {
        setIsRunning((prevState) => { return !prevState });
    }

    function onHandleClickNext() {
        setIsRunning(false);
        if (type === 'focus') {
            setType('break');
            setTime(300);
        }
        else {
            setType('focus');
            setTime(1500);
        }
    }

    if (time <= 0) {
        setIsRunning(false);
        if (type === 'focus') {
            setType('break');
            setTime(5);
        }
        else {
            setType('focus');
            setTime(25);
        }
    }

    let buttonStyles = "";
    if (!isRunning) {
        buttonStyles = "px-8 py-4 duration-150 bg-blue-500 rounded-lg"
    }
    else {
        buttonStyles = "px-8 py-4 duration-150 bg-blue-700 rounded-lg"
    }


    return (
        <div className="flex flex-col p-6 m-3 space-y-10 bg-white rounded-2xl shadow-2xl w-96">
            <div>
                <div className="flex flex-col items-center justify-center">
                    <h2 className="text-3xl">{type[0].toUpperCase() + type.slice(1)}</h2>
                    <h1 className="text-9xl">{formatTime(time)}</h1>
                </div>
                <div className="flex justify-center pt-5 ml-8">
                    <button onClick={onHandleClickStartStop} className="bg-blue-700 text-white border-b-8 border-b-blue-700 rounded-lg text-3xl w-56">
                        <div className={buttonStyles}>{isRunning ? 'Pause' : 'Start'}</div></button>
                    <button onClick={onHandleClickNext} className="ml-5">⇥</button>
                </div>
            </div>
        </div>
    );
}
