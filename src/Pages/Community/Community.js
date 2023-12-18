// App.js
import React from 'react';
import Card from '../Home/card';
import img from '../../logo.svg'
import creatordata from '../../Components/creatordata'
import Header from '../Home/banner'
import Leaderboard from '../Community/Leaderboard'
const App = () => {
  return (
    <>
    <Header/>
    <Leaderboard/>
    <div className="flex flex-wrap justify-center">
      
      {/* Render three cards with different names */}
      
      <h1>HUI</h1>
     
    </div>
    </>
  );
};

export default App;
