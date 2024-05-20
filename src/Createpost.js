import React, { useState,useEffect } from 'react'
import {addDoc,collection} from 'firebase/firestore'
import { auth,db } from './firebase';
import {useNavigate} from 'react-router-dom'
function Createpost() {
    const[title,setTitle]=useState("");
    const[post,setPost]=useState("");
    const postscollectionref=collection(db,'posts');
    let navigate=useNavigate();
    const createpost= async() => {

        await addDoc(postscollectionref,{title,post,author:{name:auth.currentUser.displayName,id:auth.currentUser.uid}} );
        navigate("/");
    };
    useEffect(() => {
        if (!isAuth) {
          navigate("/login");
        }
      }, []);
  return (
    <div className='createPostPage'>
      <div className='cpContainer'>
         <h1>Create A Post</h1>
         <div className='inputGp'>
            <label>Title:</label>
            <input placeholder='title..' onChange={(e)=>setTitle(e.target.value)} />
         </div>
         <div className='inputGp'>
         <label>Post:</label>
         <textarea placeholder='post.....' onChange={(e)=>setPost(e.target.value)} />
         </div>
         <button onClick={createpost}>submit post</button>
      </div>
    </div>
  )
}

export default Createpost
