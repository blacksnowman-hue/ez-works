import React from 'react';
import "./Cards.css";
const Card = ({pic,title,text}) => {
  return (
    <div className='cardWrapper'>
        <div className='cardHead'>
            <img className='icon' src={pic} alt='img' width={40} height={30}/>
            <p>{title}</p>
        </div>
        <div className='cardText'>{text}</div>
    </div>
  )
}

export default Card