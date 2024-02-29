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
    ])
  return (
     <div className="container">
      <NotesList notes={notes}/>
     </div>
  );
};

export default App;