import React from 'react';
import Note from './Note';
import AddNote from './AddNote';
// import Search from './Search';
// import Header from './Header';

const NotesList = ({ notes,handleAddNote,handleDeleteNote,}) => {
  return (
    <>
    {/* <Header/> */}
    {/* <Search/> */}
    <div className="notes-list">
      {notes.map((note) => (
        <Note 
        id={note.id} 
        text={note.text}
        date={note.date}
        handleDeleteNote={handleDeleteNote}
        />
        ))}
      <AddNote handleAddNote={handleAddNote}/>
    </div>
  </>
  );
};

export default NotesList;
