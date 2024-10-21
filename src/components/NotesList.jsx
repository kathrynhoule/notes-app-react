import React from "react";
import Note from "./Note";
import '../App.css';

const NotesList = () => {
     return (
          <div class="notes-list">
               <Note />
               <Note />
               <Note />
          </div>
     )
}

export default NotesList;