import React from "react";
import Header from "./Header";
import './App.css';
import Chatbot from "./Chatbot.js";
import Home from "./Home.js"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Chat } from "@mui/icons-material";
import Cards from './Cards';
import PeopleCards from './PeopleCards';
import RegistrationPage from "./Registration";
import Login from "./Login"
import Profile from './Profile'
import MyProfile from './MyProfile'
import 'bootstrap/dist/css/bootstrap.min.css';
import Messages from "./messages";
import { Card } from "react-bootstrap";

function App() {
  return(
    <div className="App">
      <Router>
        <Routes>
          <Route path='/log' element={<Login/>} />
          <Route path='/feed' element={<><Header/> <Cards/></>}/>
          <Route path='/people' element={<><Header/> <PeopleCards/></>}/>
          <Route path='/reg' element={<RegistrationPage/>} />
          <Route path='/chat' element={<> <Header/> <Messages/> </>}/>
          <Route path='/profile' element={<> <Header/> <Profile/> </>}/>
          <Route path='/myprofile' element={<> <Header/> <MyProfile/> </>}/>
          <Route path='/' element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  )
}

//Up and running
export default App;
