import React, { useState } from "react";
import "./login.css"
import { useDispatch } from "react-redux";
import {login} from "../slice/userslice.js";
import {useNavigate} from "react-router-dom"

const Login=()=>{
   

  const adminEmail = 'knsharma2002@gmail.com';
  const adminPassword = '12345678';

    const [email, setemail] = useState("");
    const [password, setpassword] =useState("");
    
    const dispatch=useDispatch();
    
    const navigate=useNavigate();

    const handleSubmit=(e)=>{
          e.preventDefault();

          dispatch(
            login({
                email:email,
                password:password,
                loggedIn:true,
            })
          );
          if (email === adminEmail && password === adminPassword) {
            navigate("/Dashboard")
        }
   }; 
  
   
   

    return (
        <div className="login">
        <form className="login_form" onSubmit={(e)=>handleSubmit(e)}>

        <h1>Admin Login</h1>

        <input 
         type="email"
         placeholder="Email"
         value={email} onChange={(e)=> setemail(e.target.value)}
          />

        <input 
         type="password"
         placeholder="Password"
         value={password} onChange={(e)=> setpassword(e.target.value)}
          />
          
          <button type="submit" className="submit_btn">Submit</button> 
         
        </form>
        </div>
    );
};
export default Login
