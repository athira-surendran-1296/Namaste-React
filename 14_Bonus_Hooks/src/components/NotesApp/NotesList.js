import React from 'react'
import Note from './Note'

const NotesList = ({notes, onDeleteNote, onEditNote}) => {
    return (
        <div className='flex flex-col gap-2'>
            {
                notes.map(note => 
                        <Note key={note.id} 
                              note={note} 
                              onDeleteNote={onDeleteNote} 
                              onEditNote={onEditNote} 
                        />
                )
            }
        </div>
    )
}

export default NotesList