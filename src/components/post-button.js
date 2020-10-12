import React from "react";
import "./post-button.css";
import create from "../images/create.png";
function PostButton(props) {
  const {onClick} = props;
  return (
    <button className="post-button" onClick={onClick}>
      <img src={create}></img>
    </button>
  );
}

export default PostButton;
