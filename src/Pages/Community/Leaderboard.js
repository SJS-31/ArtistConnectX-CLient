// Leaderboard.js
import React from 'react';
import creatordata from '../../Components/creatordata';

const Leaderboard = () => {
  const topPlayers = creatordata.slice(0, 4);

  return (
    <div className="max-w-md mx-auto mt-8 bg-white rounded-lg shadow-md overflow-hidden">
      <h2 className="text-2xl font-bold mb-4 p-4 bg-gray-200">Leaderboard</h2>

      {topPlayers.map((player) => (
        <div key={player.id} className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center">
            <img src={player.img} alt={player.name} className="w-10 h-10 rounded-full mr-4" />
            <span>{player.name}</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2">{player.coins}</span>
            <img src="coin-icon.png" alt="Coin" className="w-5 h-5" />
            <span className="ml-2">#{player.id}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Leaderboard;
