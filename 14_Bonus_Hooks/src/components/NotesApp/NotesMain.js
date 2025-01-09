import React, { useRef, useState } from 'react'
import AddNote from './AddNote';
import NotesList from './NotesList';


const NotesMain = () => {

    const [notes, setNotes] = useState([{ id: 0, content: 'Learn React' }, { id: 1, content: 'Exercise' }, { id: 2, content: 'Call home' }]);

    const addNote = (content) => {
        setNotes([...notes, { id: notes.length, content: content }])
    }

    return (
        <div className='p-3'>
            <div className='text-sm font-bold'>Notes</div>
            <div className='w-4/6 mt-2'>
                <div className='flex flex-col gap-2'>
                    <AddNote onAddNote={addNote}/>
                    <NotesList notes={notes} />
                </div>
            </div>
        </div>
    )
}

export default NotesMain;