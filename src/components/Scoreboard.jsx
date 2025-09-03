import React from 'react';

const Scoreboard = ({ 
  homeScore, 
  awayScore, 
  setHomeScore, 
  setAwayScore,
  homeTeamName,
  awayTeamName,
  time,
  shotClock,
  period
}) => {
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const updateScore = (team, points) => {
    if (team === 'home') {
      setHomeScore(prev => Math.max(0, prev + points));
    } else {
      setAwayScore(prev => Math.max(0, prev + points));
    }
  };

  return (
    <div className="scoreboard-container p-3">
      <div className="teams-container mb-3">
        <div className="team">
          <div className="team-name">{homeTeamName}</div>
          <div className="team-score">{homeScore}</div>
        </div>
        <div className="team"></div>
        <div className="team">
          <div className="team-name">{awayTeamName}</div>
          <div className="team-score">{awayScore}</div>
        </div>
      </div>
      
      <div className="game-info mb-3">
  <div className="period">{period}</div>
  <div className="game-clock-container">
    <div className="game-clock display-4">{formatTime(time)}</div>
  </div>
  <div className="shot-clock display-4">{shotClock}</div>
</div>
      
      <div className="score-controls">
        <div className="row">
          <div className="col-5 text-end">
            <div className="d-grid gap-1">
              <button className="btn btn-sm btn-success mb-1" onClick={() => updateScore('home', 1)}>+1</button>
              <button className="btn btn-sm btn-success mb-1" onClick={() => updateScore('home', 2)}>+2</button>
              <button className="btn btn-sm btn-success mb-1" onClick={() => updateScore('home', 3)}>+3</button>
              <button className="btn btn-sm btn-danger" onClick={() => updateScore('home', -1)}>-1</button>
            </div>
          </div>
          <div className="col-2"></div>
          <div className="col-5 text-start">
            <div className="d-grid gap-1">
              <button className="btn btn-sm btn-success mb-1" onClick={() => updateScore('away', 1)}>+1</button>
              <button className="btn btn-sm btn-success mb-1" onClick={() => updateScore('away', 2)}>+2</button>
              <button className="btn btn-sm btn-success mb-1" onClick={() => updateScore('away', 3)}>+3</button>
              <button className="btn btn-sm btn-danger" onClick={() => updateScore('away', -1)}>-1</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scoreboard;