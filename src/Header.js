import React from 'react'
import './Header.css'
import PetsIcon from '@mui/icons-material/Pets';
import ForumIcon from '@mui/icons-material/Forum';

function Header(){
    return (
        <div className="header">
            <PetsIcon />
            <h2>🐶</h2>
            <ForumIcon />
        </div>
    )
}

export default Header