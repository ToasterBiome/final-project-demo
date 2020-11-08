import React, { useState } from "react";
import "./sticky-note.css";

function StickyNote(props) {
  const { message, date,username } = props;
  console.log(date);
  const x = useState(Math.random() * 800 - 400);
  const y = useState(Math.random() * 400 - 200);
  console.log(x[0]);
  const divStyle = {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform:
      "translate(" +
      x[0] +
      "%," +
      y[0] +
      "%)",
  };
  const { formattedDate } = useState(new Date(date));
  console.log(formattedDate);

  const waa = (
    <div className="sticky-note" style={divStyle}>
      <div className="sticky-data">{message}</div>
      <div className="sticky-date">{date}</div>
      <div className="sticky-username">{username}</div>
    </div>
  );

  return waa;
}

export default StickyNote;
