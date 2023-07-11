import React from "react";
import { useEffect, useState } from "react";
import "./Deal.css"
import {auth, provider} from "./config"
import {signInWithPopup} from "firebase/auth"
import Home from "./Home"

function Deal() {
  useEffect(()=>
  { 
      window.scrollTo(0,0) 
  }, [])

  const [value,setValue] = useState('')
  const handleClick= () =>{
    signInWithPopup(auth, provider).then((data)=>{
      setValue(data.user.email)
      localStorage.setItem("email", data.user.email)

    })

  }
      useEffect(()=>
      { 
        setValue(localStorage.getItem('email'))
      })

    return (

    <div>
      <div className="log">
        <div className="login_button">
          <div className="log_text">
              <h1>REGISTER NOW & GET EXCLUSIVE OFFERS</h1>
                <button 
                onClick={handleClick}
                className="signup"
                type="submit">
                  SIGN UP WITH GOOGLE
                </button>        
          </div>
        </div>
        <div className="phone_div">
          <img src="/picsrc/phonelogo.png" alt="" />
        </div>
      </div>
    </div>
    );
  }

export default Deal;