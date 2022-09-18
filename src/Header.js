import React from 'react'
import './Header.css'
import PetsIcon from '@mui/icons-material/Pets';
import ForumIcon from '@mui/icons-material/Forum';
import PersonIcon from '@mui/icons-material/Person';
import { IconButton } from '@mui/material';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

function Header(){
    
    return (

        <div className="header">

                <font size="+5">🐶</font>

            <div>
            <Link to='/feed'>
                <IconButton>
                <PersonIcon className="header_icon" fontSize="large"/>
                </IconButton>
            </Link>
            <Link to='/dogs'>
                <IconButton>
                <PetsIcon className="PetsIcon" fontSize="large"/>
                </IconButton>
            </Link>
            </div>

            <Link to="/chat">
                <IconButton>
                    <ForumIcon className="ForumIcon" fontSize="large"/>
                </IconButton>
            </Link>
        </div>
    )
}

export default Header