import React from 'react';
import './Card.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function Card({name, bio, img}) {
    return ( 
        <div className='tile' style={{
            backgroundImage: `url(${img})`,
            backgroundSize:'cover',
        }}>
            <div className='mask d-flex justify-content-start align-items-end'>
            {/* <div className='mask'> */}
                {/* <div className='card-title'>{name}</div> */}
                <div>
                    <p class="card-title">{name}</p>
                    <p class="card-text">{bio}</p>
                    <div className='d-flex flex-direction-row insta-container'>
                        <img className='insta-logo' src='./assets/instagram-logo.png'></img>
                        <p className='handle'>handle</p>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Card;