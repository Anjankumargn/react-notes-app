import { useState } from "react";
import {nanoid} from "nanoid";
import NotesList from "./components/NotesList";

const App=()=>{
     const [notes,setNotes]=useState([
      {
      id:nanoid(),  
      text:"This is my 1st note",
      date:"29/02/2024"
     },
     {
      id:nanoid(),  
      text:"This is my 2nd note",
      date:"27/02/2024"
     },{
      id:nanoid(),  
      text:"This is my 3rd note",
      date:"21/02/2024"
     },
     {
      id:nanoid(),  
      text:"This is my new note",
      date:"01/03/2024"
     }
    ]);

    const AddNote=(text)=>{
const  date=new Date();
const newNote={
  id:nanoid(),  
      text:text,
      date:date.toLocaleDateString()
}
const newNotes=[...notes,newNote];
setNotes(newNotes);
}
  return (
     <div className="container">
      <NotesList notes={notes} handleAddNote={AddNote}/>
     </div>
  );
};

export default App;