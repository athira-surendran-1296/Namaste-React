import React, { useState } from 'react'

const Note = ({note, onEditNote, onDeleteNote}) => {
  const [noteContent, setNoteContent] = useState(note.content);
  return (
      <div className='flex items-center gap-2'>
          {
            note.isEditing ? 
            <>
                <div className='flex-1 items-center border-b'>
                    <input className='bg-gray-200 px-1 w-full' value={noteContent} onChange={(e) => setNoteContent(e.target.value)}/>
                </div>
                <button className='bg-green-500 text-white p-1 px-3 rounded-md'
                    onClick={() => onEditNote({id: note.id, content: noteContent, isEditing: false})}>
                    Save
                </button>
            </>
            :
            <>
                <div className='flex-1 items-center border-b'>
                    <p className={!note.content ? 'px-1 pt-4' : 'px-1 pt-0'}>{note.content}</p>
                </div>
                <button className='bg-blue-300 text-white p-1 px-3 rounded-md'
                    onClick={() => onEditNote({id: note.id, content: note.content, isEditing: true})}>
                    Edit
                </button>
            </>
          }
          <button className='bg-red-500 text-white p-1 px-3 rounded-md'
              onClick={() => { onDeleteNote(note.id) }}>
              Delete
          </button>
      </div>
  )
}

export default Note