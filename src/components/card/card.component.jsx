import React from 'react';
import './card.style.css'
export const Card = ({monster}) => {
    return (
        <div className="card-container">
            <img alt="monster" src={`https://robohash.org/${monster.id}?set=set3&size=120x120`}/>
            <h2 >{monster.name}</h2>
            <p>{monster.email}</p>
        </div>)
}