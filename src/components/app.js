import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import PostButton from "./post-button";
import StickyNote from "./sticky-note";
import stickyNoteData from "../data/notes";
import { motion } from "framer-motion";
import CreateNote from "./create-note";


/**
 * The app is responsible for routing and loading the appropriate page within the application.
 */

function App() {

  const [notes,setNotes] = useState(stickyNoteData);

  const onUpdateNotes = (text,date) => {
    stickyNoteData.push({text:text,date:date});
    setNotes(stickyNoteData);
  }

  const [classStyle,setClassStyle] = useState({
    display: "block"
});

  const showCreateNote = () => {
    console.log("trying to display1");
    setClassStyle({
      display:"block"
  });
  console.log("trying to display");
  }

  return (
    <div>
      <Header></Header>

      {notes.map((data) => {
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
      })}

      

      <Footer></Footer>

      <CreateNote notesList={notes} onUpdateNotes={onUpdateNotes} classStyle={classStyle} setClassStyle={setClassStyle}></CreateNote>

      <PostButton onClick={showCreateNote}></PostButton>
    </div>
  );
}

export default App;
