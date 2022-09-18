import React from 'react';
import './Profile.css'
import { Link } from 'react-router-dom'


function Profile() {
    let user = JSON.parse(window.localStorage.getItem('profile'))
    let users = JSON.parse(window.localStorage.getItem('users'))
    console.log(user)
    return (
        <div className='d-flex justify-content-center profile-container'>
            <div className='profile'>
                <div className='profile-label'>Name</div>
                <div className='profile-text'>{users.users[user.id - 1].firstname}</div>
                <div className='profile-label'>Last name</div>
                <div className='profile-text'> {users.users[user.id - 1].lastname}</div>
                <div className='profile-label'>Email</div>
                <div className='profile-text'> {users.users[user.id - 1].email}</div>
                <div className='profile-label'>Instagram</div>
                <div className='profile-text'> {users.users[user.id - 1].instagram}</div>
                <img src={users.users[user.id - 1].image} className='profile-image'></img>
                {/* <Link className='btn button-9' to='/reg'>Or Register To Join!</Link> */}
            </div>
        </div>

     );
}

export default Profile;

