import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Scoreboard from './components/Scoreboard';
import Timer from './components/Timer';
import ShotClock from './components/ShotClock';
import Controls from './components/Controls';
import TeamFoul from './components/TeamFoul';

function App() {
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [time, setTime] = useState(600);
  const [shotClock, setShotClock] = useState(24);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [homeTeamName, setHomeTeamName] = useState('Home Team');
  const [awayTeamName, setAwayTeamName] = useState('Away Team');

  return (
    <div className="App">
      <div className="container-fluid py-3">
        <header className="text-center mb-3">
          <h4 className="text-white mb-0">Basketball Scoreboard</h4>
        </header>
        
        {/* Combined components container */}
        <div className="combined-components">
          {/* Scoreboard with integrated clocks */}
          <div className="row mb-3">
            <div className="col-12">
              <Scoreboard 
                homeScore={homeScore} 
                awayScore={awayScore} 
                setHomeScore={setHomeScore}
                setAwayScore={setAwayScore}
                homeTeamName={homeTeamName}
                awayTeamName={awayTeamName}
                time={time}
                shotClock={shotClock}
              />
            </div>
          </div>
          
          {/* Team Fouls Component */}
          <div className="row mb-3">
            <div className="col-12">
              <TeamFoul />
            </div>
          </div>
          
          {/* Clock controls and game controls */}
          <div className="row g-2">
            <div className="col-md-6">
              <Timer 
                time={time} 
                setTime={setTime}
                isRunning={isTimerRunning}
                setIsRunning={setIsTimerRunning}
              />
            </div>
            <div className="col-md-6">
              <ShotClock 
                shotClock={shotClock} 
                setShotClock={setShotClock}
                isTimerRunning={isTimerRunning}
              />
            </div>
            <div className="col-12">
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
    </div>
  );
}

export default App;