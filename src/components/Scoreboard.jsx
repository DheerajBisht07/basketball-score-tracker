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
    <div className="scoreboard p-4 mb-4">
      <div className="row align-items-center">
        {/* Home Team */}
        <div className="col-4 text-end">
          <div className="team-name mb-2">{homeTeamName}</div>
          <div className="score mb-3">{homeScore}</div>
          <div className="d-grid gap-2">
            <button 
              className="score-btn btn-success mb-2" 
              onClick={() => updateScore('home', 1)}
            >
              +1
            </button>
            <button 
              className="score-btn btn-success mb-2" 
              onClick={() => updateScore('home', 2)}
            >
              +2
            </button>
            <button 
              className="score-btn btn-success mb-2" 
              onClick={() => updateScore('home', 3)}
            >
              +3
            </button>
            <button 
              className="score-btn btn-danger" 
              onClick={() => updateScore('home', -1)}
            >
              -1
            </button>
          </div>
        </div>
        
        {/* VS Separator */}
        <div className="col-4 text-center">
          <div className="display-4 text-warning fw-bold">VS</div>
        </div>
        
        {/* Away Team */}
        <div className="col-4 text-start">
          <div className="team-name mb-2">{awayTeamName}</div>
          <div className="score mb-3">{awayScore}</div>
          <div className="d-grid gap-2">
            <button 
              className="score-btn btn-success mb-2" 
              onClick={() => updateScore('away', 1)}
            >
              +1
            </button>
            <button 
              className="score-btn btn-success mb-2" 
              onClick={() => updateScore('away', 2)}
            >
              +2
            </button>
            <button 
              className="score-btn btn-success mb-2" 
              onClick={() => updateScore('away', 3)}
            >
              +3
            </button>
            <button 
              className="score-btn btn-danger" 
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