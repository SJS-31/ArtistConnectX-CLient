// App.js
import React from 'react';
import Card from './card';
import img from '../../logo.svg'
import creatordata from '../../Components/creatordata'
import Header from './banner'
import Leaderboard from '../Community/Leaderboard'
const App = () => {
  return (
    <>
    <Header/>
    <Leaderboard/>
    <div className="flex flex-wrap justify-center">
      
      {/* Render three cards with different names */}
      
      {creatordata.map((creatordata) => (
            <div key={creatordata.name} className="w-1/3 p-4">
            <Card
              name={creatordata.name}
              location={creatordata.location}
              score={creatordata.score}
              img={creatordata.img}
              dt={creatordata.dt}
            />
          </div>
          ))}
      {/* <Card name="Card 1" img ={img}/>
      <Card name="Card 2" />
      <Card name="Card 3" /> */}
    </div>
    </>
  );
};

export default App;
