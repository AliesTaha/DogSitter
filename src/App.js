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
import RegistrationPage from "./Registration";
import Login from "./Login"
import Profile from './Profile'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return(
    <div className="App">
      <Router>
        <Routes>
          <Route path='/chat' element={<> <Header/> <Chatbot/> </>}/>
          <Route path='/feed' element={<> <Header/> <Cards/> </>} />
          <Route path='/' element={<Home/>}/>
          <Route path='/log' element={<><Header/> <Login/> </>} />
          <Route path='/reg' element={<><Header/> <RegistrationPage/> </>} />
        </Routes>
      </Router>
    </div>
  )
}

//Up and running 
export default App;