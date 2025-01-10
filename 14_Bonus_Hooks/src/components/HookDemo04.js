import React from 'react'
import NotesMain from './NotesApp/NotesMain';
import NotesMainBetter from './NotesAppBetter/NotesMainBetter';

/** USE REDUCER HOOK */
const HookDemo04 = () => {
    return (
        <div>
            <h1 className='font-bold text-blue-600'>
                Use Reducer example
            </h1>

            {/** Implementation with use state hook */}
            {/* <NotesMain />  */}

            {/** Implementation with use reducer hook */}
            {/**
             * https://react.dev/learn/extracting-state-logic-into-a-reducer#comparing-usestate-and-usereducer
             */}
            <NotesMainBetter />
        </div>
    )
}

export default HookDemo04