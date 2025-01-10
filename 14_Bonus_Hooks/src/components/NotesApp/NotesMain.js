import React, { useState } from 'react'
import AddNote from './AddNote';
import NotesList from './NotesList';


const NotesMain = () => {

    const [notes, setNotes] = useState([
        { id: 0, content: 'Learn React', isEditing: false }, 
        { id: 1, content: 'Exercise', isEditing: false }, 
        { id: 2, content: 'Call home', isEditing: false }
    ]);

    const addNote = (content) => {
        setNotes([...notes, { id: notes.length, content: content, isEditing: false }])
    }

    const deleteNote = (id) => {
        setNotes(notes.filter(note => note.id !== id))
    }

    const editNote = (note) => {
        let newList = notes.map(n => {
            if(n.id === note.id) {
                return (note)
            } else
            return(n)
        })
        
        setNotes(newList);
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

export default NotesMain;