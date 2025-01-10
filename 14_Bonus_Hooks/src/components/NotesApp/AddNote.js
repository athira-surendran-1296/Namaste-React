import React, { useState } from 'react'

const AddNote = ({onAddNote}) => {
    const [notesContent, setNotesContent] = useState('');
    return (
        <div className='flex gap-2'>
            <input className='border rounded-md flex-1 p-1' 
                   onChange={(e) => setNotesContent(e.target.value)} 
                   value={notesContent}/>
            <button className={'bg-yellow-400 text-white p-1 px-3 rounded-md '}
                    onClick={() => onAddNote(notesContent)}>
                Add
            </button>
        </div>
    )
}

export default AddNote