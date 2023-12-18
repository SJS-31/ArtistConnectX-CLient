// Leaderboard.js
import React from 'react';
import creatordata from './creatordata';
import PlayerCard from './PlayerCard';

const Leaderboard = () => {
  const topPlayers = creatordata.slice(0, 1);

  return (
    <div className="max-w-md mx-auto mt-8 bg-white rounded-lg shadow-md overflow-hidden">
      <h2 className="text-2xl font-bold mb-4 p-4 bg-gray-200">Leaderboard</h2>

      {topPlayers.map((player) => (
        <PlayerCard key={player.id} player={player} />
      ))}
    </div>
  );
};

export default Leaderboard;
