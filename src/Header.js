import React from 'react'
import './Header.css'
import PetsIcon from '@mui/icons-material/Pets';
import ForumIcon from '@mui/icons-material/Forum';
import PersonIcon from '@mui/icons-material/Person';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { IconButton } from '@mui/material';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import { AccountBox } from '@mui/icons-material';

function Header(){

    return (

        <div className="header">
            <div>
                <img src="assets/cibyd-logo.png" className="small-logo" />
                <img src="assets/cibyd-logo-text.png" className="large-logo" />
            </div>
            <div className='middle-div'>
                <Link to='/people'>
                    <IconButton>
                    <PersonSearchIcon className="header_icon" fontSize="large"/>
                    </IconButton>
                </Link>
                <Link to='/feed'>
                    <IconButton>
                    <PetsIcon className="PetsIcon" fontSize="large"/>
                    </IconButton>
                </Link>
            </div>

            <div>

                <Link to="/chat">
                    <IconButton>
                        <ForumIcon className="ForumIcon" fontSize="large"/>
                    </IconButton>
                </Link>
                <Link to='/myprofile'>
                    <IconButton>
                    <AccountBoxIcon className="profile_icon" fontSize="large"/>
                    </IconButton>
                </Link>
            </div>
        </div>
    )
}

export default Header
