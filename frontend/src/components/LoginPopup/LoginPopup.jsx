import React from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets';
import { useState } from 'react';

const LoginPopup = ({setShowLogin}) => {

    const [currState, setCurrState] = useState("Login");

  return (
    <div className='login-popup'>
        <form className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {currState==="Login"?<></>:<input type="text" placeholder='Your Name' required/>}
                
                <input type="email" placeholder='Your Email' required/>
                <input type="password" placeholder='Password' required/>
            </div>    
            <button>{currState==="Sign Up"?"create account":"LogIn"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required/>
                <p>By continuing, I agree to the <span>Terms of Use</span> and <span>Privacy Policy</span>.</p>
            </div>

            {
            currState==="Login"
            ?<p>Don't have an account?<span onClick={()=>setCurrState("Sign Up")}>Sign Up</span></p>
            :<p>Already have an account?<span onClick={()=>setCurrState("Login")}>Login Here</span></p>
            }

            

        </form>
      
    </div>
  )
}


export default LoginPopup