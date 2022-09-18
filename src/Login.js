import React, {useState, setState} from 'react';
import './Registration.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const baseURL = "http://localhost:8080/api/v1";


function RegistrationPage() {
    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);


    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }
    }

    const handleSubmit = async(event) => {
        // event.preventDefault()
        const formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);

        fetch(baseURL + '/login', {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            redirect: 'follow',
            referrer: 'no-referrer',
            body: formData,
            credentials: 'include'
          });

          fetch(baseURL + '/profile', {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            redirect: 'follow',
            referrer: 'no-referrer',
            credentials: 'include'
          })
      }



    return (
        <div className='d-flex justify-content-center registration-container'>
            <div className="form">
            <div className='mt-5'>
                <h1>Login</h1>
            </div>
            <div className="form-body">
                <div className="email field">
                    <label className="form__label" htmlFor="email">Email </label>
                    <input  type="email" id="email" value={email} onChange={(e) => handleInputChange(e)} className="form__input" placeholder="Email"/>
                </div>
                <div className="password field">
                    <label className="form__label" htmlFor="password">Password </label>
                    <input className="form__input" type="password"  id="password" value={password} onChange={(e) => handleInputChange(e)} placeholder="Password"/>
                </div>
                </div>
                <div className="footer field">
                    <button onClick={()=>handleSubmit()} type="submit" className="btn button-9" role="button">Login</button>
                </div>
            </div>
        </div>
     );
}

export default RegistrationPage;
