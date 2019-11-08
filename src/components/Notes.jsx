import React, { useContext } from 'react';
import NotesContext from '../context/NotesContext';

function Notes() {
  const { notes } = useContext(NotesContext);

  return (
    <React.Fragment>
      <ul>
        {notes.map((note) => (<li>{note.body}</li>))}
      </ul>
    </React.Fragment>
  )
}

export default Notes;