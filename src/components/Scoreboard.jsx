import React from 'react';

const Scoreboard = ({ 
  homeScore, 
  awayScore, 
  setHomeScore, 
  setAwayScore,
  homeTeamName,
  awayTeamName
}) => {
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
        
        {/* VS Separator */}
        <div className="col-2 text-center">
          <div className="text-warning fw-bold">VS</div>
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