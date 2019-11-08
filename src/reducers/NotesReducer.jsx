const notesReducer = (state, action) => {
  switch (action.type) {
      case 'ADD_NOTE':
          return [
              ...state,
              { body: action.body }
          ]
      case 'REMOVE_NOTE':
          return state.filter((note) => note.id !== action.id)
      default:
          return state
  }
}

export default notesReducer;