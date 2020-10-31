import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note';
import CreateArea from './components/CreateArea';

interface NoteConfig {
  title: string,
  content: string
}

const App: React.FC = () => {
  const [notes, setNotes] = useState<NoteConfig[]>([])

  const addNoteHandler = (newNote: NoteConfig) => {
    setNotes(prevNotes => [...prevNotes, newNote])
  }

  const deleteNoteHandler = (id: number) => {
    setNotes(prevNotes => {
      return prevNotes.filter((_noteItem: {}, index: number) => index !== id)}
    )
  }

  return (
    <div className="App">
      <Header />
      <CreateArea onAdd={addNoteHandler}/>
      {notes.map((note, index) => (
        <Note 
        key={index}
        id={index}
        title={note.title}
        content={note.content}
        onDelete={deleteNoteHandler}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
