import { alertClasses } from '@mui/material';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

export const Loginpage = () => {
    const history=useNavigate();


//    redirect the page with anthore page  
    const gethome =() =>{
        alert("login sucessfully done");
        history("/");
    }
  return (
    <div>
         <div class="form">
            <h2>Login</h2>
            <div class="input">
                <div class="inputBox">
                    <label for="">Username</label>
                    <input type="text" maxLength={50}/>
                </div>
                <div class="inputBox">
                    <label for="">Password</label>
                    <input type="password" maxLength={10}/>
                </div>
                <div class="inputBox">
                   <button onClick={gethome}>login here</button> 
                </div>
            </div>
            <p class="forgot">Forgot Password? <Link to="/Forgotpass" >Forgot Password?</Link></p>
            
            
        </div>
    </div>
  )
}
