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

function HomePage() {
  return(
    <div>
      <h1>I am homepage</h1>
    </div>
  )
}

function App() {
  return(
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Header/>} />
          <Route path='/chat' element={<Chatbot/>} />
        </Routes>
      </Router>
      
    </div>
  )
}
export default App;