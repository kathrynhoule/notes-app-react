import React from "react";
import Note from "./Note";
import '../App.css';

const NotesList = ({ notes }) => {
     return (
          <div class="notes-list">
               {notes.map((note) => (
                    <Note />
               ))}
          </div>
     )
}

export default NotesList;