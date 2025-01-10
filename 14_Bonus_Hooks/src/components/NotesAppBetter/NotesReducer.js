export default notesReducer = (state, action) => {
   switch(action.type) {
        case 'add' : {
            return([
                ...state,
                {
                    id: state.length,
                    content: action.content,
                    isEditing: false
                }
            ])
        }
        case 'delete' : {
            return(state.filter(note => note.id !== action.id))
        }
        case 'edit' : {
            let newList = state.map(n => {
                if(n.id === action.note.id) {
                    return (action.note)
                } else
                return(n)
            })
            return(newList)
        }
   }
}