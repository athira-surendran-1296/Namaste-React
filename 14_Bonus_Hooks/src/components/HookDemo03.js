import React, { memo, useCallback, useState } from 'react'
// USE CALLBACK HOOK

const Child = memo( // memo is used to prevent re-render of the child component
    ({onButtonClick}) => {
        console.log('Child Component Rendered');
        return (<div>
            <h1>Child Component</h1>
            <button className='border border-blue-400 bg-blue-400 rounded-md p-1' onClick={onButtonClick}>Click Me</button>
        </div>)
    }
); 

const Parent = () => {
    console.log('Parent Component Rendered');
    const [count, setCount] = useState(0);
    const incrementCount = () => {
        setCount(count + 1);
    }

    // const handleBtnClick = () => { 
    //     console.log('Btn clicked');
    // };

    const handleBtnClick = useCallback(
        () => { 
            console.log('Btn clicked');
        },
        [] // Empty array means the function will not be recreated on re-render
    );

    return (<div className='p-2'>
        <h1>Parent Component</h1>
        <div className='flex gap-4 items-center'>
            <button className='border border-green-400 bg-green-400 rounded-md p-1' onClick={incrementCount}>Click Me</button>
            <p>{count}</p>
        </div>
        <Child onButtonClick={handleBtnClick}/>
    </div>)
}

const HookDemo03 = () => {
    return (
        <div>
            <h1 className='font-bold p-1'>Use Callback Hook</h1>

            <div className='p-1 py-3 text-sm'>
                <p>The useCallback hook is used to memoize a function so that it is not recreated every time the component re-renders.
                    It is used to optimize the performance of the application by caching the function and returning the cached function when the same input is passed again.
                    It is used to avoid unnecessary re-renders of the component.
                    It is usually used when functions are passes as props to component from parent to child, and to avaoid unnecessary re renders of the child component in this case</p>
            </div>

            <Parent />
        </div>
    )
}

export default HookDemo03;