import React from "react";
import Header from "./header";
import Footer from "./footer";
import PostButton from "./post-button";
import StickyNote from "./sticky-note";
import stickyNoteData from "../data/notes";

/**
 * The app is responsible for routing and loading the appropriate page within the application.
 */

function App() {
  return (
    <div>
      <Header></Header>

      {stickyNoteData.map((data) => {
        return (
          <StickyNote
            key={data.text}
            message={data.text}
            date={new Date(data.date).toLocaleDateString("en-US")}
          ></StickyNote>
        );
      })}

      <Footer></Footer>

      <PostButton></PostButton>
    </div>
  );
}

export default App;
