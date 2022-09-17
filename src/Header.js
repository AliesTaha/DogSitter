import React from 'react'
import './Header.css'
import PetsIcon from '@mui/icons-material/Pets';
import ForumIcon from '@mui/icons-material/Forum';
import PersonIcon from '@mui/icons-material/Person';
import { IconButton } from '@mui/material';

function Header(){
    
    return (

        <div className="header">
            <IconButton>
            <PersonIcon className="header_icon" fontSize="large"/>
            </IconButton>

            <font size="+4">🐶</font>

            <IconButton>
            <ForumIcon className="header_icon" fontSize="large"/>
            </IconButton>
        </div>
    )
}

export default Header