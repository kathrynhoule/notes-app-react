import React from "react";
import { MdDeleteForever } from "react-icons/md";

const Note = () => {
     return (
          <div className="note">
               <span>Hello! This is our first note!</span>
               <div className="note-footer">
                    <span>21/10/2024</span>
                    <MdDeleteForever />
               </div>
          </div>
     )
}

export default Note;