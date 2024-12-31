import React from 'react'

/**
 * 
 * The useRef hook is used to persist values between renders without causing a re-render when the value changes.
 * It can be used to access a DOM element directly or to store a mutable value that does not cause a re-render when updated.
 *
 */

const HookDemo02 = () => {
  // USE REF HOOK

  let x = 0;

  const hendleIncrementX = () => {
      x++;
      console.log('x = ',x);
  }

  const [y, setY] = React.useState(0);

  const hendleIncrementY = () => {
        setY(y+1);
  }

  const ref = React.useRef(0);

  const hendleIncrementRef = () => {
        ref.current++;
        console.log('ref = ',ref.current);
  }

  return (
      <div>
          <h1 className='font-bold'>Hook Demo 02 - Use Ref</h1>
          <div>
              <div className='flex flex-col gap-4 justify-center items-center'>
                  <div className='flex gap-4 mt-4 justify-center items-center'>
                      <p>Value of x = {x}</p>
                      <button className='bg-green-400 p-1 rounded-md' onClick={hendleIncrementX}>Increment x</button>
                  </div>
                  <p className='text-xs'>{'Check console to see its value increasing. x is a local variable created using let. Its value is incremented on button press.'}</p>
                  <p className='text-xs'>{'However its not reflected in the UI because React will track the UI change only for state variables.'}</p>
                  <p className='text-xs'>{'The value of x will be reset to zero for every component rerender'}</p>
              </div>
          </div>
          <div>
              <div className='flex flex-col gap-4 justify-center items-center'>
                  <div className='flex gap-4 mt-4 justify-center items-center'>
                      <p>Value of y = {y}</p>
                      <button className='bg-green-400 p-1 rounded-md' onClick={hendleIncrementY}>Increment y</button>
                  </div>
                  <p className='text-xs'>{'Change in y will reflect in the UI as it is a state variable'}</p>
              </div>
          </div>
          <div>
              <div className='flex flex-col gap-4 justify-center items-center'>
                  <div className='flex gap-4 mt-4 justify-center items-center'>
                      <p>Value of ref = {ref.current}</p>
                      <button className='bg-green-400 p-1 rounded-md' onClick={hendleIncrementRef}>Increment ref</button>
                  </div>
                  <p className='text-xs'>{'ref is created using useRef. The value of ref is incremented on button click but its value is not updated in the UI as it is not a state variable'}</p>
                  <p className='text-xs'>{'The value of ref will persist between renders'}</p>
                  <p className='text-xs'>{'This can be observed by the steps - keep clicking the increment ref, re render the component by clicking increment y'}</p>
                  <p className='text-xs'>{'We will see that the ref variables value will be updated to its last value (in UI) and x will be reset to 1 (x will be seen in console)'}</p>
              </div>
          </div>
      </div>
  )
}

export default HookDemo02;