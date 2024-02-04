import React, { useState } from 'react'
import Add from "../img/addAvatar.png"
import{getAuth, createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import {auth, storage} from "../firebase"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const Register = () => {
  const [err,setErr] = useState(false)
  const handleSubmit = async (e) =>{
    e.preventDefault()
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].value;
    try{
      const res = await createUserWithEmailAndPassword(auth, email, password);

// Create the file metadata
/** @type {any} */
const metadata = {
  contentType: 'image/jpeg'
};

// Upload file and metadata to the object 'images/mountains.jpg'
const storageRef = ref(storage, displayName);
const uploadTask = uploadBytesResumable(storageRef, file, metadata);

// Listen for state changes, errors, and completion of the upload.
uploadTask.on(
  (error) => {
    setErr(true);
  }, 
  () => {
    // Upload completed successfully, now we can get the download URL
    getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
      await updateProfile(res.user,{
        displayName,
        photoURL:downloadURL
      })
    });
  }
);
    }catch(err){
      setErr(true)
    }
  }

  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">Conversify</span>
            <span className="title">Register</span>
            <form onSubmit={handleSubmit}/>
            <form>
                <input type="text" placeholder='display name'/>
                <input type="email" placeholder='email'/>
                <input type='password' placeholder='password'/>
                <input style={{display:"none"}} type='file' id='file'/>
                <label htmlFor="file">
                    <img src={Add} alt="" />
                    <span>Add an Avatar</span>
                </label>
                <button>Sign Up</button>
                {err && <span>Something went wrong</span>}
            </form>
            <p>You do have an account? Login</p>
        </div>
    </div>
  )
}

export default Register
