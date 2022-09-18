import React, {useState, setState} from 'react';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Link } from 'react-router-dom'


const baseURL = "http://10.33.130.218:80/api/v1";


function LoginPage() {
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
        var object = {};
        formData.forEach((value, key) => object[key] = value);
        var json = JSON.stringify(object);
        console.log(json)
        try {
          const response = await axios({
            method: "post",
            url: baseURL + '/login',
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
          });
        } catch(error) {
          console.log(error)
        }
      }

    return (
        <div className='d-flex justify-content-center login-container'>
            <img className='logo' src='./assets/cibyd.png'></img>
            <img className='dog' src='./assets/puppy-logo.png'></img>
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
                <Link className='register-button' to='/reg'>Or Register To Join!</Link>
            </div>
            
        </div>
     );
}

export default LoginPage;