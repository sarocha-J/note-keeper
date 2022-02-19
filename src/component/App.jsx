import React, {useState} from 'react';
import Footer from './Footer';
import Header from './Header';
import Note from './Note';
import Card from './Card';

const App = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes(prevNote => {
      return [ ...prevNote, newNote];
    })
  }

  const deleteNote = (id) => {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, idx)=> {
        return idx !== id
      });
    });
  }

  return (
    <div>
      <Header/>
      <Card
        onAdd={addNote}
      />
      {notes.map((item, idx) =><Note 
              key={idx} 
              id={idx}
              className="note" 
              title={item.title} 
              desc={item.desc} 
              onDelete={deleteNote}
              />)
      }
      <Footer/>
    </div>
  );
}

export default App;
