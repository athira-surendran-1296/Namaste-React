import React from 'react'

const NotesList = ({notes}) => {
    return (
        <div className='flex flex-col gap-2'>
            {
                notes.map(note =>
                    <div className='flex' key={note.id}>
                        <p className='flex-1'>{note.content}</p>
                        <div className='flex gap-2'>
                            {/* <button className='bg-blue-300 text-white p-1 px-3 rounded-md'>Edit</button> */}
                            <button className='bg-red-500 text-white p-1 px-3 rounded-md'>Delete</button>
                        </div>
                    </div>)
            }
        </div>
    )
}

export default NotesList