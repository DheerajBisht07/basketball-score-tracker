import React from 'react';

const Scoreboard = ({ 
  homeScore, 
  awayScore, 
  setHomeScore, 
  setAwayScore,
  homeTeamName,
  awayTeamName,
  time,
  shotClock
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
    <div className="scoreboard p-3 mb-3">
      <div className="row align-items-center">
        {/* Home Team */}
        <div className="col-5 text-end">
          <div className="team-name small fw-bold mb-1">{homeTeamName}</div>
          <div className="score display-6 mb-2">{homeScore}</div>
          <div className="d-grid gap-1">
            <button 
              className="score-btn btn-sm btn-success mb-1" 
              onClick={() => updateScore('home', 1)}
            >
              +1
            </button>
            <button 
              className="score-btn btn-sm btn-success mb-1" 
              onClick={() => updateScore('home', 2)}
            >
              +2
            </button>
            <button 
              className="score-btn btn-sm btn-success mb-1" 
              onClick={() => updateScore('home', 3)}
            >
              +3
            </button>
            <button 
              className="score-btn btn-sm btn-danger" 
              onClick={() => updateScore('home', -1)}
            >
              -1
            </button>
          </div>
        </div>
        
        {/* VS Separator - Moved to be parallel with scores */}
        <div className="col-2 text-center">
          <div className="text-warning fw-bold mb-4" style={{fontSize: '1.8rem'}}>VS</div>
          
          {/* Game Clock and Shot Clock placed below VS */}
          <div className="clocks-container">
            {/* Game Clock - Different color */}
            <div className="game-clock-display mb-1 ">
              <div className="clock-label small text-info">Game Clock</div>
              <div className="clock-value text-info fw-bold">{formatTime(time)}</div>
            </div>
            
            {/* Shot Clock - Different color */}
            <div className="shot-clock-display">
              <div className="clock-label small text-warning">Shot Clock</div>
              <div className="clock-value text-warning fw-bold">{shotClock}</div>
            </div>
          </div>
        </div>
        
        {/* Away Team */}
        <div className="col-5 text-start">
          <div className="team-name small fw-bold mb-1">{awayTeamName}</div>
          <div className="score display-6 mb-2">{awayScore}</div>
          <div className="d-grid gap-1">
            <button 
              className="score-btn btn-sm btn-success mb-1" 
              onClick={() => updateScore('away', 1)}
            >
              +1
            </button>
            <button 
              className="score-btn btn-sm btn-success mb-1" 
              onClick={() => updateScore('away', 2)}
            >
              +2
            </button>
            <button 
              className="score-btn btn-sm btn-success mb-1" 
              onClick={() => updateScore('away', 3)}
            >
              +3
            </button>
            <button 
              className="score-btn btn-sm btn-danger" 
              onClick={() => updateScore('away', -1)}
            >
              -1
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scoreboard;