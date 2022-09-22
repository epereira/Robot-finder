import React from 'react'
import RobotAdress from './RobotAdress'

const RobotCard = ({robot}) => {
 
  return (
    <div className="card" id={(robot.id)}>
        <div className="card-body">
        <h2 className="card-header">{(robot.name)}</h2>
        <img className="rounded-circle" src={("https://robohash.org/"+robot.id+"?set=set2")} alt="picture" />
        <ul>
            <li>{(robot.username)}</li>
            <li>{(robot.phone)}</li>
            <li>{(robot.website)}</li>
            <li>{(robot.email)}</li>
        </ul>
        <RobotAdress adress={(robot.address)}/>
        </div>

    </div>
  )
}

export default RobotCard