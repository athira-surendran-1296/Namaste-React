import React, { useMemo, useState } from 'react'

// USE MEMO HOOK

const HookDemo01 = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [term, setTerm] = useState(1);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  }

  // Expensive operation
  function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  function nthPrime(n) {
    let count = 0;
    let num = 2;
    
    while (count < n) {
      if (isPrime(num)) {
        count++;
      }
      num++;
    }
    
    console.log('expensive operation');

    return num - 1;
  }
  
  // Example usage
  // console.log(nthPrime(1234565)); // Returns the 5th prime number (11)
  

  console.log('Component rendered');
  // Component is rendered any time the state changes

  const result = useMemo(() => {
    return nthPrime(term);
  }, [term]);

  return (
    <div className={'p-3 ' + (isDarkTheme ? 'bg-slate-800 text-white' : 'text-black')}>
        <div className='flex justify-between items-center p-3'>
            <div className='font-bold'>Use Memo Demo</div>
            <button className='border border-black p-1 rounded-md bg-slate-200'>
                <span role='img' aria-label='theme change' onClick={toggleTheme}>🌗</span>
            </button>
        </div>
        <div className='p-3'>
            <p>UseMemo is a hook that is used for memoization in React. It is used to optimize the performance of the application by caching the result of a function call and returning the cached result when the same input is passed again. It is used to avoid unnecessary re-renders of the component.</p>
            <p>UseMemo is used when we want to cache the result of a function call and return the cached result when the same input is passed again. It is used to avoid unnecessary re-renders of the component. It is similar to UseEffect but it is used for memoization.</p>
        </div>

        {/** Without memoization */}
        {/* <div className='p-3'>
            <div>{'Prime number at '} 
                <input className={'border border-black rounded-md p-1 text-red-500'} value={term} onChange={(e) => setTerm(e.target.value)}/> {'th position is: '} 
                {nthPrime(term)}
            </div>
        </div> */}

        {/** With memoization */}
        <div className='p-3'>
            <div>{'Prime number at '} 
                <input className={'border border-black rounded-md p-1 text-red-500'} value={term} onChange={(e) => setTerm(e.target.value)}/> {'th position is: '} 
                {result}
            </div>
        </div>

        {/**
         * Here we have restricted the re-rendering of the component by using useMemo hook. The compoent will
         * re render only when the term value changes. The nthPrime function will be called only when the term
         * value changes. The result of the nthPrime function is cached and returned when the same input is passed
         * 
         * When the theme is toggled, the component will re-render but the nthPrime function will not be called,
         * it will return the cached result instead
         */}
    </div>
  )
}

export default HookDemo01;