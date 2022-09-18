import React, {useState, setState} from 'react';
import './Registration.css';
import UploadAndDisplayImage from "./UploadImage";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const baseURL = "http://10.33.130.218:80/api/v1";


function RegistrationPage() {
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [confirmPassword,setConfirmPassword] = useState(null);
    const [bio, setBio] = useState(null);
    const [instagram, setInstagram] = useState(null);
    const [image, setImage] = useState(null);

    const [post, setPost] = React.useState(null);


    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "lastName"){
            setLastName(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "confirmPassword"){
            setConfirmPassword(value);
        }
        if(id === "bio"){
            setBio(value);
        }
        if(id === "instagram"){
            setInstagram(value);
        }
        // if(id === "image"){
        //     setImage(e.target.value);
        // }
    }

    const handleFileSelect = (event) => {
        setImage(event.target.files[0])
    }

    const handleSubmit = async(event) => {
        // event.preventDefault()
        const formData = new FormData();
        formData.append("user[firstname]", firstName);
        formData.append("user[lastname]", lastName);
        formData.append("user[email]", email);
        formData.append("user[password]", password);
        formData.append("user[instagram]", instagram);
        formData.append("user[password_confirmation]", password);
        formData.append("user[photo]", image);
        var object = {};
        formData.forEach((value, key) => object[key] = value);
        var json = JSON.stringify(object);
        console.log(json)
        try {
          const response = await axios({
            method: "post",
            url: baseURL + '/register',
            data: formData,
            // headers: { "Content-Type": "application/json" }
            headers: { "Content-Type": "multipart/form-data" },
          });
        } catch(error) {
          console.log(error)
        }
      }

    return (
        <div className='d-flex justify-content-center registration-container'>
            <div className="form">
            <div className='mt-5'>
                <h1>Register</h1>
            </div>
            <div className="form-body">
                <div className="firstname field">
                    <label className="form__label" htmlFor="firstName">First Name </label>
                    <input className="form__input" type="text" id="firstName" value={firstName} onChange={(e) => handleInputChange(e)} placeholder="FirstName"/>
                </div>
                <div className="lastname field">
                    <label className="form__label" htmlFor="lastName">Last Name </label>
                    <input  type="text" name="" id="lastName" value={lastName} onChange={(e) => handleInputChange(e)} className="form__input" placeholder="LastName"/>
                </div>
                <div className="email field">
                    <label className="form__label" htmlFor="email">Email </label>
                    <input  type="email" id="email" value={email} onChange={(e) => handleInputChange(e)} className="form__input" placeholder="Email"/>
                </div>
                <div className="password field">
                    <label className="form__label" htmlFor="password">Password </label>
                    <input className="form__input" type="password"  id="password" value={password} onChange={(e) => handleInputChange(e)} placeholder="Password"/>
                </div>
                <div className="confirm-password field">
                    <label className="form__label" htmlFor="confirmPassword">Confirm Password </label>
                    <input className="form__input" type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => handleInputChange(e)} placeholder="Confirm Password"/>
                </div>
                <div className="instagram field">
                    <label className="form__label" htmlFor="instagram">Enter Instagram </label>
                    <input className="form__input" type="instagram" id="instagram" value={instagram} onChange={(e) => handleInputChange(e)} placeholder="Instagram"/>
                </div>
                <div className="bio field">
                    <label className="form__label" htmlFor="lastName">Bio </label>
                    <input  type="form__input" name="" id="bio"  className="form__input" value={bio} onChange={(e) => handleInputChange(e)} placeholder="Bio"/>
                </div>
                </div>
                    <input type="file" name="image" onChange={handleFileSelect} accept="image/*" />
                <div className="footer field">
                    <button onClick={()=>handleSubmit()} type="submit" className="btn button-9" role="button">Register</button>
                </div>
            </div>
        </div>
     );
}

export default RegistrationPage;