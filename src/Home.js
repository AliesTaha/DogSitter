import React from 'react'
import { Link } from 'react-router-dom'
import videoB from './RPReplay_Final1663467439.mov'
import './Home.css'

function Home() {
    return (
        <div className='home'>
            <div className="overlay"></div>
            <video src={videoB} autoPlay loop muted/>
            <div className="content">
                <font size="+11">Can I Borrow Your Dog🐕</font>
                <font size="+7"> Going on a vacation and need someone to take care of your pet?</font>
                <font size="+7"> Feeling lonely and want a pet to make you feel better?</font>
                <font size="+7"> Join us today, for free.</font>
                <Link to="/log">
                <button 
                    style={{maxWidth:"1000px"}}className="primary-button" id="reg_btn"><font size="+11">Log In </font></button>
                </Link>
                <Link to="/reg">
                    <button style={{maxWidth:"1000px"}}className="primary-button" id="reg_btn"><font size="+11">Register </font></button>
                </Link>
            </div>
        </div>
    )
}

export default Home
