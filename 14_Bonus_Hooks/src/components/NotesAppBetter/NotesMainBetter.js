import React, { useReducer } from 'react'
import AddNote from './AddNote';
import NotesList from './NotesList';
import NotesReducer from './NotesReducer';

const NotesMainBetter = () => {

    const [notes, dispatch] = useReducer(NotesReducer, []);

    const addNote = (content) => {
        dispatch({
            type: 'add',
            content: content
        })
    }

    const deleteNote = (id) => {
        dispatch({
            type: 'delete',
            id: id
        })
    }

    const editNote = (note) => {
       dispatch({
        type: 'edit',
        note: note
       })
    }

    return (
        <div className='p-3'>
            <div className='text-sm font-bold'>Notes</div>
            <div className='w-4/6 mt-2'>
                <div className='flex flex-col gap-2'>
                    <AddNote onAddNote={addNote} />
                    <NotesList notes={notes} onDeleteNote={deleteNote} onEditNote={editNote}/>
                </div>
            </div>
        </div>
    )
}

export default NotesMainBetter;