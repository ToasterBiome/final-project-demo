import React from "react";
import "./post-button.css";
import create from "../images/create.png";
function PostButton() {
  return (
    <button className="post-button">
      <img src={create}></img>
    </button>
  );
}

export default PostButton;
