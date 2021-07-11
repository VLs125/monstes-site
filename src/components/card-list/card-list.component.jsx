import React  from 'react';
import { Card } from '../card/card.component';
import './card-list.style.css';
 const CardList = ({monsters})=>{
    return (
    <div className="card-list">{monsters.map(m=>{
        return <Card key={m.id} monster ={m}/>
       })}
       </div>
       )}
export default CardList