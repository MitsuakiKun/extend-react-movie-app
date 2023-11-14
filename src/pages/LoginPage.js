import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import  firebaseConfig, { auth } from "../firebaseConfig";
import { Navigate } from "react-router-dom";

initializeApp(firebaseConfig);

const LoginPage = () => {
    const handleLogin = async () => {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({
      hd: "mail.wit.ie",
    });

    try {
        await signInWithPopup(auth, provider);
      } catch (error) {
        console.error("Error signing in with Google:", error);
      }
    };

    const [user, setUser] = useState();

    useEffect(() => {
      onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
      });
    });
  
  
    return (
      <>
      {user ? (
        <Navigate to={`/`} />
      ) : (
        <>
          <div>
            <h1>Login Page</h1>
            <button onClick={handleLogin}>Login with @mail.wit.ie Google Account</button>
          </div>
        </>
      )}
      </>
  );
};
  
  export default LoginPage;