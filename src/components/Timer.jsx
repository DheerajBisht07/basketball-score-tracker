import React, { useEffect, useState } from 'react';

const Timer = ({ time, setTime, isRunning, setIsRunning }) => {
  const [audio] = useState(new Audio(process.env.PUBLIC_URL + "/audio/gameClockBuzzer.mp3"));

  useEffect(() => {
    let interval = null;
    
    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000);
    }
    
    return () => clearInterval(interval);
  }, [isRunning, time, setTime]);

  useEffect(() => {
    if (time === 0 && isRunning) {
      audio.currentTime = 0;
      audio.play().catch(e => {
        alert("Game clock expired !!!");
        console.log("Audio play failed:", e);
      });
      
      setIsRunning(false);
    }
  }, [time, isRunning, setIsRunning, audio]);

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTime(600);
  };

  return (
    <div className="control-panel">
      <div className="control-title">Game Clock Controls</div>
      <div className="button-grid">
        <button 
          className={`btn ${isRunning ? 'btn-danger' : 'btn-primary'}`}
          onClick={toggleTimer}
          disabled={time === 0}
        >
          {isRunning ? 'Stop Game Clock' : 'Start Game Clock'}
        </button>
        <button className="btn" onClick={resetTimer}>Reset Game Clock</button>
      </div>
    </div>
  );
};

export default Timer;