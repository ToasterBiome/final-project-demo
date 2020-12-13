import React, { useState, useEffect } from "react";
import Header from "./header";
import Footer from "./footer";
import PostButton from "./post-button";
import StickyNote from "./sticky-note";
import stickyNoteData from "../data/notes";
import { motion } from "framer-motion";
import CreateNote from "./create-note";
import EditNote from "./edit-note";
import { notesCollection } from "../data/firebase";
import Draggable from "react-draggable";
import {provider, auth} from "../data/firebase";
/**
 * The app is responsible for routing and loading the appropriate page within the application.
 */

function App() {

  const [user,setUser] = useState(null);
  const isAuthenticated = user !== null;
  const [editID,setEditID] = useState(null);
  const [notes,setNotes] = useState([]);

  useEffect(() => {

    const onNext = (snapshot) => {
      const docs = snapshot.docs;
      setNotes(docs);
  }

  

  const onError = (error) => {
    console.log(error);
}

  const unsubscribe = notesCollection.orderBy("message").onSnapshot(onNext,onError);
return unsubscribe;
  },[]);

  useEffect(() => {
    const authUnsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return authUnsubscribe;
  }, []);

  const onUpdateNotes = (text,date) => {
    stickyNoteData.push({text:text,date:date});
    setNotes(stickyNoteData);
  }

  const [classStyle,setClassStyle] = useState({
    display: "none"
});

  const [editClassStyle,setEditClassStyle] = useState({
    display: "none"
  });

  const showCreateNote = () => {
    console.log("trying to display1");
    setClassStyle({
      display:"block"
  });
  console.log("trying to display");
  }

  const showEditNote = () => {
    console.log("trying to display1");
    setEditClassStyle({
      display:"block"
  });
  console.log("trying to display");
  }

  return (
    <div>
      <Header user={user}></Header>
      {notes.map((noteData)=> {
        const data = noteData.data();
        console.log(data.date);
        return (
          <Draggable key={data.message + "_drag"}>
          <motion.div
          initial={{ opacity: 0, transition: { ease: "easeOut" } }}
          animate={{ opacity: 1 }}>
          <StickyNote
            key={data.message}
            id={noteData.id}
            message={data.message}
            username={data.username}
            locked={data.locked}
            reaction_laugh={data.reaction_laugh}
            reaction_sad={data.reaction_sad}
            reaction_angry={data.reaction_angry}
            date={data.date.toDate().getTime()}
            user={user} 
            authenticated={isAuthenticated}
            uid={data.uid}
            showEditNote={showEditNote}
            editID={editID}
            setEditID={setEditID}
          ></StickyNote>
          </motion.div>
          </Draggable>
        );
      })}
      {/* {notes.map((data) => {
        console.log(data);
        return (
          <motion.div
          initial={{ opacity: 0, transition: { ease: "easeOut" } }}
          animate={{ opacity: 1 }}>
          <StickyNote
            key={data.text}
            message={data.text}
            date={new Date(data.date).toLocaleDateString("en-US")}
          ></StickyNote>
          </motion.div>
        );
      })} */}

      

      <Footer></Footer>

      <EditNote notesList={notes} onUpdateNotes={onUpdateNotes} classStyle={editClassStyle} setClassStyle={setEditClassStyle} user={user} authenticated={isAuthenticated} editID={editID}></EditNote>
      <CreateNote notesList={notes} onUpdateNotes={onUpdateNotes} classStyle={classStyle} setClassStyle={setClassStyle} user={user} authenticated={isAuthenticated}></CreateNote>

      <PostButton onClick={showCreateNote} user={user} authenticated={isAuthenticated}></PostButton>
    </div>
  );
}

export default App;
