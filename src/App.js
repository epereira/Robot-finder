import React from 'react';
/** Import de la donnée */
import './App.css';
import RobotCard from './components/RobotCard';

import Robots from './data/data';

function App() {
  console.log(Robots)
  return (
    <div className="App">
      <h1>Robot Finder</h1>
      {Robots.map((robot)=> 
      <>
       
        <RobotCard robot={robot} />
        <br />
      </>
        
      )}
      
    </div>
  );
}

export default App;
