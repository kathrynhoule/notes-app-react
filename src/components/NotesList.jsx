import React from "react";
import Note from "./Note";
import '../App.css';

const NotesList = ({ notes }) => {
     return (
          <div class="notes-list">
               {notes.map((note) => (
                    <Note id={note.id} text={note.text} date={note.date} />
               ))}
          </div>
     )
}

export default NotesList;