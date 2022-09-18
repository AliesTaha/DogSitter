import React, {useState, setState, useEffect} from 'react';
import './Card.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Card({name, bio, img, id}) {

    const baseURL = "http://localhost:8080/api/v1";
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        getData()
        const interval=setInterval(()=>{
            getData()
           },10000)

           return()=>clearInterval(interval)
      },[])

      function getData(){
        fetch(baseURL + '/profile/'+id, {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            redirect: 'follow',
            referrer: 'no-referrer',
            credentials: 'include'
          })
        .then(response => response.json())
        .then(myJson => setDatas(myJson[0]))
      }
    function saveUser(){
        window.localStorage.setItem('profile', JSON.stringify(datas))
        window.location.replace("http://localhost:3000/profile");
    }

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
                        <a href="#" onClick={saveUser} className='handle'>{datas.firstname}</a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Card;
