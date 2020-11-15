import React, { useState } from "react";
import "./sticky-note.css";
import Toast from 'light-toast';
import { notesCollection } from "../data/firebase";

function StickyNote(props) {
  const { id,message, date,username,locked } = props;

  //reactions

  let {reaction_laugh,reaction_sad,reaction_angry} = props;
  if(reaction_laugh === undefined) {
    reaction_laugh = 0;
  }
  if(reaction_sad === undefined) {
    reaction_sad = 0;
  }
  if(reaction_angry === undefined) {
    reaction_angry = 0;
  }
  const [classStyle,setClassStyle] = useState({
    visibility: "hidden"
});
  console.log(date);
  const x = useState(Math.random() * 800 - 400);
  const y = useState(Math.random() * 400);
  const color = (locked == true) ? "rgb(0, 64, 0)":"rgb(26, 26, 26)"
  console.log("COLOR: " + color + " LOCKED: " + locked);
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
      backgroundColor: color
  };
  const [formattedDate,setFormattedDate]  = useState(new Date(date).toLocaleDateString("en-US"));
  console.log(formattedDate);

  const onHoverStart = () => {
    console.log("hover start");
    setFormattedDate(new Date(date).toLocaleTimeString("en-US"));
    setClassStyle({
      visibility:"visible"
    })
  }

  const onHoverEnd = () => {
    console.log("hover end");
    setFormattedDate(new Date(date).toLocaleDateString("en-US"));
    setClassStyle({
      visibility:"hidden"
    })
  }

  const onDelete = async () => {
    if(locked) {
      Toast.info("Explanation posts are locked. Nice try though!");
      return;
    }
    try {
      const docRef = notesCollection.doc(id);
      await docRef.delete();
      Toast.success(`Message ${id} deleted successfully.`,2000);
    } catch(error) {
      console.log(error);
      Toast.info("An error has occurred. Please try again.",2000)
    }
    
  }

  const onEdit = async () => {
    Toast.info("It wouldn't be very fun to edit random notes! Coming in Code Sprint C with users :)",2000)
  }

  const onEmoteReact = async (reaction) => {
    console.log("Reacted with " + reaction);
    switch(reaction) {
      case "laugh":
          reaction_laugh++;
        break;
        case "sad":
          reaction_sad++;
        break;
        case "angry":
          reaction_angry++;
        break;
        default: 

        break;
    }

    try {
      const docRef = notesCollection.doc(id);
      await docRef.set({
        reaction_laugh,
        reaction_sad,
        reaction_angry
      },{merge: true})
    } catch (error) {
      console.log(error);
      Toast.info("Error reacting to note. Please try again.");
    }
  }

  const note = (
    <div className="sticky-note" style={divStyle} onMouseEnter={onHoverStart} onMouseLeave={onHoverEnd}>
      <div className="controls" style={classStyle}><button onClick={onEdit}>Edit</button><button onClick={onDelete}>Delete</button></div>
      <div className="reactions" style={classStyle}><button onClick={() => onEmoteReact("laugh")}>😆{reaction_laugh}</button><button onClick={() => onEmoteReact("sad")}>😢{reaction_sad}</button><button onClick={() => onEmoteReact("angry")}>😡{reaction_angry}</button></div>
      <div className="sticky-data">{message}</div>
      <div className="sticky-date">{formattedDate}</div>
      <div className="sticky-username">{username}</div>
    </div>
  );

  return note;
}

export default StickyNote;
