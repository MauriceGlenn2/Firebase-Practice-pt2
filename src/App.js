import react from "react";
import { auth } from "./Firebase/init"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import "./App.css"
import React, { useState } from "react";

function App() {
const [user, setUser] = React.useState({})
const [loading, setLoading] = React.useState(true)

React.useEffect(() => {
  onAuthStateChanged(auth, (user) => {
    setLoading(false)
    console.log(user)
    if (user){
      setUser(user)
    }
  })
}, []);

  //sign up new users
  function register(){
    console.log('register')
    createUserWithEmailAndPassword(auth, "Joe@gmail.com", "pass1234")
    .then((user) => {
     console.log(user)
      })
     .catch((error) => {
      console.log(error)
     }); 
  }

  function login() {
    signInWithEmailAndPassword(auth, "Joe@gmail.com", "pass1234")
    .then(({ user }) => {
      console.log(user)
      setUser(user)
    })
    .catch((error) =>{
      console.log(error.message)
    })
  }

  function logOut() {
    signOut(auth);
    setUser({})
  }
  
  
  return (
    <div className="App">
      <button onClick={login.user.email[0].toUpperCase} type="primary" className="btn">
        Login
      </button>
      <button onClick={register} type="primary" className="btn">
        Register
      </button>
      {loading ? "Please wait..." : user.email}
    </div>
  );
}

export default App;
//user.email[0].toUpperCase gets first letter of email