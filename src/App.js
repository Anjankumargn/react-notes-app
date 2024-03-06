import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState } from "react";
import {nanoid} from "nanoid";
import NotesList from "./components/NotesList";
import Login from "./Form/LoginPage";
import NavBar from "./NavBar";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import SignUp from "./Form/SignUpPage";
import DummyData from './components/Dummydata';

const App=()=>{
     const [notes,setNotes]=useState([
     {
       id:nanoid(),  
       text:"This is my 1st note",
       date:"29/02/2024"
      },
    //  {
    //   id:nanoid(),  
    //   text:"This is my 2nd note",
    //   date:"27/02/2024"
    //  },{
    //   id:nanoid(),  
    //   text:"This is my 3rd note",
    //   date:"21/02/2024"
    //  },
    //  {
    //   id:nanoid(),  
    //   text:"This is my new note",
    //   date:"01/03/2024"
    //  }
    ]);
<Login></Login>
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
      
      <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/signup" element={<SignUp/>}></Route>
      <Route path="/notes" element={<NotesList notes={notes} handleAddNote={AddNote}/>}></Route>
      <Route path='/dummy' element={<DummyData/>}></Route>
        </Routes>
         </BrowserRouter>   
     </div>
     
  );
};

export default App;