import React from "react";
import NotesList from "./components/NotesList";
import './App.css';
import { useState } from "react";
import { nanoid } from 'nanoid';

const App = () => {
     const [notes, setNotes] = useState([{
               id: nanoid(),
               text: "This is my first note!",
               date: "21/10/2024",
          },
          {
               id: nanoid(),
               text: "This is my second note!",
               date: "30/10/2024",
          },
          {
               id: nanoid(),
               text: "This is my third note!",
               date: "3/11/2024",
          },
     ]);

     return (
          <div className="app-container">
          <NotesList notes={notes}/>
          </div>
     )
}

export default App;