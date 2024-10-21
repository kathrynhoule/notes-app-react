import React from "react";
import { MdDeleteForever } from "react-icons/md";
import '../App.css';

const Note = ({ id, text, date }) => {
     return (
          <div className="note">
               <span>{text}</span>
               <div className="note-footer">
                    <span>{date}</span>
                    <MdDeleteForever />
               </div>
          </div>
     )
}

export default Note;