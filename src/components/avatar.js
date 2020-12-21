import React, { useState } from "react";
import "./avatar.css";
function Avatar(props) {

    const {url} = props;

    return (
        <img src={url}></img>
    )
}

export default Avatar;
