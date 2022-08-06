import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes]=useState([])

 function addNote(note){
   setNotes(pervValue =>{
     return[...pervValue,note]
   })
 }
 function deleteNote(id){
setNotes(pervValue =>{
  return pervValue.filter((note, index) => {
return index !== id;

  })
})
 }

  return (
    <div>
      <Header />
      <CreateArea
       onAdd={addNote}/>
       {notes.map((note, index) => {
          return <Note 
          key={index}
          id={index}
          title={note.title} content={note.content} onDelete={deleteNote} />
       })}
      
      <Footer />
    </div>
  );
}

export default App;
