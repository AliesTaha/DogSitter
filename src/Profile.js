import React from 'react';
import './Profile.css'


function Profile() {
    let user = JSON.parse(window.localStorage.getItem('profile'))
    console.log(user)
    return (
        <div className='d-flex justify-content-center profile-container'>
            <div className='profile'>
                <div className='profile-label'>Name</div>
                <div className='profile-text'>test</div>
                <div className='profile-label'>Last name</div>
                <div className='profile-text'>Stencell</div>
                <div className='profile-label'>Email</div>
                <div className='profile-text'>email@email.com</div>
                <div className='profile-label'>Instagram</div>
                <div className='profile-text'>suuhhhh</div>
                <img src='../assets/jared.jpg' className='profile-image'></img>
            </div>
        </div>

     );
}

export default Profile;

