import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const notesInitial = [
    {
      "_id": "63b04d54e12f1d81cb6c3a46",
      "user": "6378fb251a6b05a032ee5252",
      "title": "My Title",
      "description": "wake up",
      "tag": "personal",
      "date": "2022-12-31T14:55:16.428Z",
      "__v": 0
    },
    {
      "_id": "63b04d54e12f1d81cb6c3a46",
      "user": "6378fb251a6b05a032ee5252",
      "title": "My Title",
      "description": "wake up",
      "tag": "personal",
      "date": "2022-12-31T14:55:16.428Z",
      "__v": 0
    },
    {
      "_id": "63b04d54e12f1d81cb6c3a46",
      "user": "6378fb251a6b05a032ee5252",
      "title": "My Title",
      "description": "wake up",
      "tag": "personal",
      "date": "2022-12-31T14:55:16.428Z",
      "__v": 0
    },
    {
      "_id": "63b04d54e12f1d81cb6c3a46",
      "user": "6378fb251a6b05a032ee5252",
      "title": "My Title",
      "description": "wake up",
      "tag": "personal",
      "date": "2022-12-31T14:55:16.428Z",
      "__v": 0
    },
    {
      "_id": "63b04d54e12f1d81cb6c3a46",
      "user": "6378fb251a6b05a032ee5252",
      "title": "My Title",
      "description": "wake up",
      "tag": "personal",
      "date": "2022-12-31T14:55:16.428Z",
      "__v": 0
    },
    {
      "_id": "63b04d54e12f1d81cb6c3a46",
      "user": "6378fb251a6b05a032ee5252",
      "title": "My Title",
      "description": "wake up",
      "tag": "personal",
      "date": "2022-12-31T14:55:16.428Z",
      "__v": 0
    },
    {
      "_id": "63b04d54e12f1d81cb6c3a46",
      "user": "6378fb251a6b05a032ee5252",
      "title": "My Title",
      "description": "wake up",
      "tag": "personal",
      "date": "2022-12-31T14:55:16.428Z",
      "__v": 0
    }
  ]
  const [notes, setNotes] = useState(notesInitial)
  
  //Add a note
  const addNote = (title, description, tag) =>{
    console.log("Adding a new Note")
    const note = {
      "_id": "63b04d54e12f1d81cb6c3a46",
      "user": "6378fb251a6b05a032ee5252",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2022-12-31T14:55:16.428Z",
      "__v": 0
    };
    setNotes(notes.concat(note))
  }
  //Delete a note
  const deleteNote = (id) =>{
    console.log("Deleting the note with id"+id)
    const newNotes = notes.filter((note)=>{return note._id!==id})
    setNotes(newNotes)
  }
  //Edit a note
  const editNote = () =>{
    
  }



  return (
    <NoteContext.Provider value={{notes, addNote, deleteNote, editNote}}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
