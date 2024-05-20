import './App.css';
import React, { useState } from 'react';
import  {BrowserRouter as Router,Routes,Route,Link}from 'react-router-dom'
import Home from './Home';
import Login from './Login';
import Createpost from './Createpost';
import {signOut} from 'firebase/auth'
import { auth } from './firebase';
function App() {
  
  const[isAuth,setIsAuth]=useState(localStorage.getItem("isAuth"));
  const signuserout=()=>{
    signOut(auth).then(()=>{
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname="/login";
    })
  };
  return (
    <Router>
       <nav>
        <Link to="/"> Home </Link>

        {!isAuth ? (
          <Link to="/login"> Login </Link>
        ) : (
          <>
            <Link to="/createpost"> Create Post </Link>
            <button onClick={signuserout}> Log Out</button>
          </>
        )}
      </nav>
      <Routes>
        <Route path='/' element={<Home isAuth={isAuth}/>} />
        <Route path='/login' element={<Login setIsAuth={setIsAuth}/>} />
        <Route path='/createpost' element={<Createpost isAuth={isAuth}/>} />
      </Routes>
    </Router>
  );
}

export default App;
