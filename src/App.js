import React from "react";
import {Route, Routes} from "react-router-dom"
import './App.css';
import Dashboard from './Component/Dashboard.js';
import './Component/Dash.css'
import Login from './Features/login'
//import { Routes } from "react-router-dom";

function App() {
  return (
   <div>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/Dashboard" element={<Dashboard/>}/>
    </Routes>
   </div>
  );
}

export default App;
