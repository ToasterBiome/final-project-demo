import React, {useState} from 'react'
import "./create-note.css";
import Toast from 'light-toast';
import { notesCollection } from '../data/firebase';


function CreateNote(props) {

    const {classStyle,setClassStyle} = props;

    const [noteInput,setNoteInput] = useState("");
    const [nameInput,setNameInput] = useState("");

    const onSubmit = async (event) => {
        

        let finalUsername = nameInput;
        if(finalUsername === "") {
            finalUsername = "Unknown";
        }

        if(noteInput === "Enter your text here!") {
            Toast.info("Please enter a message.",2000)
            return;
        }

        try {

            await notesCollection.add({
                message:noteInput,
                date: new Date(Date.now()),
                username:finalUsername
            })

            setClassStyle({
                display:"none"
            });
            setNoteInput("");
        } catch(error) {
            console.log(error);
            Toast.info("An error has occurred. Please try again.",2000)
        }


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

      const handleNameInput = (event) => {
        setNameInput(event.target.value);
    }

    return (

        <div className="create-note" style={classStyle}>
            Create New Note
            <textarea className="note-input" placeholder="Enter your message here!" value={noteInput} onChange={handleInput}></textarea>
            <div className="name-display">Display Name: <input value={nameInput} onChange={handleNameInput} className="name-input"/></div>
            
            <button className="exit-button" onClick={onExit}>Exit</button>
            <button className="create-button" onClick={onSubmit}>Create Note</button>
        </div>
    )
}

export default CreateNote
