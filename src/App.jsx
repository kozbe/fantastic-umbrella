import React, { useReducer } from "react";
import notesReducer from './reducers/NotesReducer';
import Notes from './components/Notes';
import AddNote from './components/AddNote';
import NotesContext from './context/NotesContext';

import "./App.css";

function App() {
  const [notes, dispatch] = useReducer(notesReducer, []);
  return (
    <NotesContext.Provider value={{ notes, dispatch }}>
      <Notes />
      <AddNote />
    </NotesContext.Provider>
  );
}

export default App;
