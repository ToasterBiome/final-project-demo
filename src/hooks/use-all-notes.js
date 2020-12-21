import {useState,useEffect} from "react";
import { notesCollection } from "../data/firebase";
function useAllNotes() {
    const [notes,setNotes] = useState([]);
  useEffect(() => {

    const onNext = (snapshot) => {
      const docs = snapshot.docs;
      setNotes(docs);
      console.log(notes);
  }

  const onError = (error) => {
    console.log(error);
}

  const unsubscribe = notesCollection.orderBy("message").onSnapshot(onNext,onError);
return unsubscribe;
  },[]);

  return [notes];
}

export default useAllNotes;