import React, { useState } from 'react'
import './LoginScreen.css'
import SignupScreen from './SignupScreen'
import { auth } from '../firebase';


function LoginScreen() {
  const[signIn,setSignIn]=useState(false)
  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;


    auth
      .signInWithEmailAndPassword(email, password)
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };


  return (
    <div className='loginScreen'>
      <div className='loginScreen__background'>
        <img className="loginScreen__logo" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt=''/>
        <button onClick={()=>setSignIn(true)} className='loginScreen__button'>Sign In</button>
        <div className='loginScreen__gradient'></div>
      </div>
      <div className='loginScreen__body'>
        {signIn?(
          <SignupScreen/>
        ):(
          <>
          <h1>Unlimited films, TV Programmes and
             more.</h1>
          <h2>Watch anywhere. Cancel at anytime.</h2>
          <h3>Ready to watch? Enter your email to create or restart your memebership.</h3>
          <div className='loginScreen__input'>
            <form>
              <input type='email'
              placeholder='Email Address'/>
              <button onClick={()=>setSignIn(true)} className='loginScreen__getstarted'>
                GET STARTED
              </button>
            </form>
          </div>
          </>
        )}
      </div>
    </div>
  )
}


export default LoginScreen
