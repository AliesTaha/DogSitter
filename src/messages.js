import React from 'react';
import './messages.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';

const baseURL = "http://10.33.130.218:80/api/v1";


function Messages() {

    return (
        <div id="holder">
        <h1 id="main-head" >Messages
        </h1>
        <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-start">
            <img src="./assets/chat1.jpg" className="pics"/>
            <div className="ms-2 me-auto">
            <div className="fw-bold">Ivan</div>
            Do you want the redpill or the bluepill?
            </div>
            <span className="badge bg-primary rounded-pill">3</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start">
            <img src="./assets/chat2.jpg" className="pics"/>
            <div className="ms-2 me-auto">
            <div className="fw-bold">Kelly</div>
            Bruh your dog loves one direction
            </div>
            <span className="badge bg-primary rounded-pill">10</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start">
            <img src="./assets/chat3.jpg" className="pics"/>
            <div className="ms-2 me-auto">
            <div className="fw-bold">Akash</div>
            bruh u messing with the new lil durk album?
            </div>
            <span className="badge bg-primary rounded-pill">4</span>
        </li>
        </ul>
        </div>

       
    
    );
}

export default Messages;