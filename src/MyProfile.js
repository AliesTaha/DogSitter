import React from 'react';
import './Profile.css'
import { Link } from 'react-router-dom'


function MyProfile() {
    let user = JSON.parse(window.localStorage.getItem('current'))
    console.log(user)
    return (
    <div className="full-profile">
            <div className='d-flex justify-content-center profile-container'>
            <div className='profile'>
                <div className='profile-label'>Name</div>
                <div className='profile-text'>{user.user.firstname}</div>
                <div className='profile-label'>Last name</div>
                <div className='profile-text'> {user.user.lastname}</div>
                <div className='profile-label'>Email</div>
                <div className='profile-text'> {user.user.email}</div>
                <div className='profile-label'>Instagram</div>
                <div className='profile-text'> {user.user.instagram}</div>
                <img src={user.images} className='profile-image'></img>
                <Link className='btn button-9 chat-button' to='/chat'>Chat</Link>
            </div>
        </div>
    </div>

     );
}

export default MyProfile;

