import React, { useState } from "react";
import "./sticky-note.css";

function StickyNote(props) {
  const { message, date } = props;
  console.log(date);

  const divStyle = {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform:
      "translate(" +
      (Math.random() * 800 - 400).toString() +
      "%," +
      (Math.random() * 400 - 200).toString() +
      "%)",
  };
  const { formattedDate } = useState(new Date(date));
  console.log(formattedDate);

  const waa = (
    <div className="sticky-note" style={divStyle}>
      Note
      <div className="sticky-data">{message}</div>
      <div className="sticky-date">{date}</div>
    </div>
  );

  return waa;
}

export default StickyNote;
