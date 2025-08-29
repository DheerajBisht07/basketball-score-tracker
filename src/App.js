import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Scoreboard from './components/Scoreboard';
import Timer from './components/Timer';
import ShotClock from './components/ShotClock';
import Controls from './components/Controls';

function App() {
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [time, setTime] = useState(600); // 10 minutes in seconds
  const [shotClock, setShotClock] = useState(24);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [homeTeamName, setHomeTeamName] = useState('Home Team');
  const [awayTeamName, setAwayTeamName] = useState('Away Team');

  return (
    <div className="App">
      <div className="container-fluid py-4">
        <header className="text-center mb-4">
          <h1 className="display-4 text-white">Basketball Scoreboard</h1>
        </header>
        
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <Scoreboard 
              homeScore={homeScore} 
              awayScore={awayScore} 
              setHomeScore={setHomeScore}
              setAwayScore={setAwayScore}
              homeTeamName={homeTeamName}
              awayTeamName={awayTeamName}
            />
          </div>
        </div>
        
        <div className="row justify-content-center mt-4">
          <div className="col-md-4 mb-3">
            <Timer 
              time={time} 
              setTime={setTime}
              isRunning={isTimerRunning}
              setIsRunning={setIsTimerRunning}
            />
          </div>
          <div className="col-md-4 mb-3">
            <ShotClock 
              shotClock={shotClock} 
              setShotClock={setShotClock}
              isTimerRunning={isTimerRunning}
            />
          </div>
        </div>
        
        <div className="row justify-content-center mt-3">
          <div className="col-md-8 col-lg-6">
            <Controls 
              setHomeScore={setHomeScore}
              setAwayScore={setAwayScore}
              setTime={setTime}
              setShotClock={setShotClock}
              setIsTimerRunning={setIsTimerRunning}
              setHomeTeamName={setHomeTeamName}
              setAwayTeamName={setAwayTeamName}
              homeTeamName={homeTeamName}
              awayTeamName={awayTeamName}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;