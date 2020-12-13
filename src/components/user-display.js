import React from 'react';
import "./user-display.css";
import Toast from 'light-toast';
import {provider, auth} from "../data/firebase";

function UserDisplay(props) {

    const signIn = async () => {
        try {
          await auth.signInWithPopup(provider);
        } catch(error){
            Toast.info("An error has occurred. Please try again.",2000)
            console.log(error);
          
        }
      };

      const signOut = async () => {
        try {
          await auth.signOut();
        } catch (error) {
            Toast.info("An error has occurred. Please log out again.",2000)
            console.log(error);
        }
      };


    return (
        <div>
            {props.user ? props.user.displayName : "Sign in to get started!"}
            <button className="log-button" onClick={props.user ? signOut : signIn}>{props.user ? "Log out" : "Log in"}</button>
        </div>
    )
}

export default UserDisplay;

