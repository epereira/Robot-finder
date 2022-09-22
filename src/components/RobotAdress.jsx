import React from 'react'
import { useState } from 'react';

import './robotAdress.css';

const RobotAdress = ({adress}) => {
    const [showAdress, setShowAdress] = useState(false);
    const hideShow = () => {
       
        setShowAdress(!showAdress);

    }
    
  return (
    <>
        <button className="btn btn-primary" onClick={hideShow}>{!showAdress ? 'Show': 'Hide'} adress</button>
        {showAdress && 
        <div>
            <div>{(adress.street)} - {(adress.suite)}</div>
            <div>{(adress.zipcode)} - {(adress.city)}</div>
        </div>
        }
       
    
    </>    
   
  )
}

export default RobotAdress