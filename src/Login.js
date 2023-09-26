import React, { useState} from 'react';
import './Login.css'
import {Link , useNavigate} from "react-router-dom";
import { auth } from "./firebase";
function Login() {
  const navigate=useNavigate();
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const signIn = e =>{
    e.preventDefault();
    auth.signInWithEmailAndPassword(email,password)
    .then(auth  =>{
      navigate('/')
    })
    .catch(error => alert(error.message))
  }
  const register = e =>{
    e.preventDefault();
    auth
    .createUserWithEmailAndPassword(email,password)
    .then((auth)=>{
      //it sucessfully created new user with email and password
      //console.log(auth);
      if(auth){
        navigate('/')
      }
    })
    .catch(error => alert(error.message))
    // do some fancy firebase register shittttt
  }
  return (
    <div className='login'>
      <Link to= '/'>
      <img
          className="login__logo"
          alt="amazon"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
        </Link>
        <div className='login__container'>
          <h1>Sign-in</h1>
          <form>
            <h5>E-mail</h5>
            <input type='text' value={email} onChange=
            {e=>setEmail(e.target.value)}/>
            <h5>Password</h5>
            <input type='password' value={password} onChange=
            {e => setPassword(e.target.value)}/>
            <button type='submit' className='login__signInButton' onClick={signIn}>Sign In</button>
            
          </form>
          <p>
            By signing-in you agree to the FAKE AMAZON conditions 
            and use sale. Please see our Privacy Notice, 
            our Cookies Notice and our Interest-Based Ads Notice.
          </p>
          <button onClick={register} className='login_registerButton'>Create your Amazon account</button>
        </div>
    </div>
  );
}

export default Login

