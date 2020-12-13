import React from "react";
import "./header.css";
import UserDisplay from "./user-display";
function Header(props) {
  return (
    <header className="header">
      <span className="header__logo" aria-label="Logo">
        A Small Chat
      </span>
      <UserDisplay user={props.user}/>
    </header>
  );
}

export default Header;
