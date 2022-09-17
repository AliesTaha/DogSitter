import React from 'react';
import './Card.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function Card({name, img}) {
    return ( 
            <div className='tile' style={{
                backgroundImage: `url(${img})`,
                backgroundSize:'cover',
            }}>
                <div className='mask d-flex justify-content-start align-items-end'>
                    <div className='card-title'>{name}</div>
                </div>
        </div>
     );
}

export default Card;