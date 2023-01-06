import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial);


  //Get all notes
  const getNotes = async() => {
    //API call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM3OGZiMjUxYTZiMDVhMDMyZWU1MjUyIn0sImlhdCI6MTY2ODkzNDM2OX0.aLhuBZB3xg4WhU5LBWasyJeKfkXHMtCuEPueMYV5xfs",
      }
    });
    const json = await response.json()
    console.log(json)
    setNotes(json)
  }



  //Add a note
  const addNote = async(title, description, tag) => {
    //API call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM3OGZiMjUxYTZiMDVhMDMyZWU1MjUyIn0sImlhdCI6MTY2ODkzNDM2OX0.aLhuBZB3xg4WhU5LBWasyJeKfkXHMtCuEPueMYV5xfs",
      },
      body: JSON.stringify({title, description, tag}),
    });
    
    console.log("Adding a new Note");
    const note = {
      _id: "63b04d54e12f1d81cb6c3a46",
      user: "6378fb251a6b05a032ee5252",
      title: title,
      description: description,
      tag: tag,
      date: "2022-12-31T14:55:16.428Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };


  //Delete a note
    const deleteNote = async(id) => {
      //API call
      const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM3OGZiMjUxYTZiMDVhMDMyZWU1MjUyIn0sImlhdCI6MTY2ODkzNDM2OX0.aLhuBZB3xg4WhU5LBWasyJeKfkXHMtCuEPueMYV5xfs",
        }
      });
      const json = response.json();
      console.log(json)


    console.log("Deleting the note with id" + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };
  //Edit a note
  const editNote = async (id, title, description, tag) => {
    //API call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM3OGZiMjUxYTZiMDVhMDMyZWU1MjUyIn0sImlhdCI6MTY2ODkzNDM2OX0.aLhuBZB3xg4WhU5LBWasyJeKfkXHMtCuEPueMYV5xfs",
      },
      body: JSON.stringify(title, description, tag),
    });
    const json = response.json();

    //Logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
