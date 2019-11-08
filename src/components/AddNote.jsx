import React, { useContext, useState } from "react";
import NotesContext from '../context/NotesContext';

function AddNote() {
  const { dispatch } = useContext(NotesContext);
  const [body, setBody] = useState("");
  return (
    <React.Fragment>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({
            type: "ADD_NOTE",
            body
          });
          setBody("");
        }}
      >
        <textarea
          onChange={e => setBody(e.target.value)}
          value={body}
        ></textarea>
        <button>AddNote</button>
      </form>
    </React.Fragment>
  );
}

export default AddNote;
