import React, {useState} from 'react'
import "./create-note.css";
import stickyNoteData from "../data/notes";
import StickyNote from "./sticky-note";

function CreateNote(props) {

    const {notesList, onUpdateNotes, classStyle,setClassStyle} = props;

    const [noteInput,setNoteInput] = useState("Enter your text here!");

    const onSubmit = (event) => {
        console.log(noteInput);
        console.log(stickyNoteData);
        onUpdateNotes(noteInput,Date.now());
        setClassStyle({
            display:"none"
        });
      };

      const onExit = (event) => {
          console.log("close");
          setClassStyle({
            display:"none"
        });

      };

      const handleInput = (event) => {
          setNoteInput(event.target.value);
      }

    return (

        <div className="create-note" style={classStyle}>
            Create New Note
    <textarea className="note-input" value={noteInput} onChange={handleInput}></textarea>
            <button className="exit-button" onClick={onExit}>Exit</button>
            <button className="create-button" onClick={onSubmit}>Create Note</button>
        </div>
    )
}

export default CreateNote
