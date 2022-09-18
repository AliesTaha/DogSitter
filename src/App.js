import React from "react";
import Header from "./Header";
import './App.css';
import Chatbot from "./Chatbot.js";
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
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return(
    <div className="App">
      <Header/>
      {/* <Cards/> */}
      <RegistrationPage/>
      {/* <Login/> */}
      {/* <Router>
        <Routes>
          <Route path='/' element={<Header/>} />
          <Route path='/chat' element={<Chatbot/>} />
        </Routes>
      </Router> */}
    </div>
  )
}
export default App;
