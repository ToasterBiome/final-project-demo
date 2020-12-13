import React from "react";
import "./post-button.css";
import create from "../images/create.png";
import Toast from 'light-toast';
function PostButton(props) {
  const {onClick} = props;

  const onNotAuth = () => {
    Toast.info("You are not logged in. You will not be able to make a post without being logged in.");
  }

  return (
    <button className="post-button" onClick={props.authenticated ? onClick : onNotAuth}>
      <img alt="Button to create a new post." src={create}></img>
    </button>
  );
}

export default PostButton;
