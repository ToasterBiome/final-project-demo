import React, {useState, useEffect} from 'react'
import "./create-note.css";
import Toast from 'light-toast';
import { notesCollection } from '../data/firebase';


function EditNote(props) {

    const {editID} = props;

    const {editMessage} = props;

    const {classStyle,setClassStyle} = props;

    const [noteInput,setNoteInput] = useState(editMessage);

    useEffect(() => {
        if(noteInput === "") {
            setNoteInput(editMessage);
        }
    
      },[editMessage]);

    const onSubmit = async (event) => {
        
        if(!props.authenticated) {
            Toast.info("You are not logged in.");
            return;
        }

        // let finalUsername = nameInput;
        // if(finalUsername === "") {
        //     finalUsername = "Unknown";
        // }

        if(noteInput === "") {
            Toast.info("Please enter a message.",2000)
            return;
        }

        try {

            const docRef = notesCollection.doc(editID);
            await docRef.set({
                message:noteInput
            },{merge: true})

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
          setNoteInput("");
          setClassStyle({
            display:"none"
        }
        );

      };

      const handleInput = (event) => {
          setNoteInput(event.target.value);
      }


    return (

        <div className="create-note" style={classStyle}>
            Editing Note
            <textarea className="note-input" value={noteInput} onChange={handleInput}></textarea>
    <div className="name-display">Display Name: {props.authenticated ? props.user.displayName : "Unknown"}</div>
            
            <button className="exit-button" onClick={onExit}>Exit</button>
            <button className="create-button" onClick={onSubmit}>Edit Note</button>
        </div>
    )
}

export default EditNote
