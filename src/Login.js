import React from 'react'

import  {auth,google} from './firebase'
import {signInWithPopup} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'
 function Login({setIsAuth}) {
  
  let navigate =useNavigate();
  const signinwithgoogle= ()=>{
        signInWithPopup(auth,google).then((result)=>{
        localStorage.setItem("isauth",true)      
        setIsAuth(true)
        navigate('/')
       });
  };
  return (
    <div className='loginPage'>
  <p>sign in with google</p>
  <button className='login-with-google-btn' onClick={signinwithgoogle}>sigin in with google </button>
     
    </div>
  )
}

export default Login
