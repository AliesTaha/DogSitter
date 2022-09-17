import React from 'react';
import './Card.css'


function Card({name, img}) {
    return ( 
        <div className='card' style={{
            backgroundImage: `url(${img})`,
            backgroundSize:'cover'
          }}>
            <h3>{name}</h3>
        </div>
     );
}

export default Card;