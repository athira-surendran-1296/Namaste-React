import React, { useState } from 'react'
import ImageSlider from './ImageSlider';
import BetterImageSlider from './BetterImageSlider';

const CodingQuestion1 = () => {
    const countries = [
        {
            name: 'India',
            value: 'IN',
            cities: ['Delhi', 'Mumbai']
        },
        {
            name: 'Pakistan',
            value: 'PK',
            cities: ['Lahore', 'Karachi']
        },
        {
            name: 'Bangladesh',
            value: 'BG',
            cities: ['Dhaka', 'Chittagong']
        }
    ];

    const [cities, setCities] = useState(countries[0].cities);

    const handleCountryChage = (e) => {
        setCities(countries[e.target.value].cities);
    }

    return (
        <div>
            <div>Dependant drop downs</div>
            <div className='flex gap-2'>
                {/* First drop down - Countries */}
                <select className='border p-1' onChange={handleCountryChage}>
                    {countries.map((country, countryIdx) => <option key={country.name} value={countryIdx}>
                        {country.name}
                    </option>
                    )
                    }
                </select>
                {/* Second drop down - Cities */}
                {!!cities.length &&<select className='border p-1'>
                    {cities.map(city => <option key={city} value={city}>
                        {city}
                    </option>
                    )
                    }
                </select>}
            </div>
        </div>
    )
}

const ImpTopics = () => {
    return(
        <div className='border bg-slate-300 mt-3'>
            <p className='font-bold'>Hooks</p>
            <ol>
                <li>useState</li>
                <li>useEffect</li>
                <li>useContext</li>
                <li>useReducer</li>
                <li>useMemo</li>
                <li>useCallback</li>
                <li>useRef</li>
            </ol>
        </div>
    )
}

const Demo = ({despription}) => {
    console.log('Demo component rendered!');
    const [name, setName] = useState('Athira'); 
    let letVariable = 'Simran';
    // State variable - only used when we want the value to be dynamic (or to update in future)
    // Change in the state variable re renders the component

    return(
        <div>
            <h1>{despription}</h1>
            <p>My name is {name} - state variable</p>
            <p>My name is {letVariable} - let variable</p>
            <button className='bg-green-300 rounded-md cursor-pointer p-2' onClick={() => {
                setName('Elon Musk');
                letVariable = 'Raj';
                console.log('State - ', name);
                console.log('let var -', letVariable)
            }}>Change name</button>
        </div>
    )
}

const InterviewPrep = () => {
    return (
        <div className='p-2'>
            {/* <h1 className='font-bold'>Interview Preperation - Important Topics</h1> */}
            {/* <CodingQuestion1 /> */}

            {/* <ImpTopics /> */}

            {/* <Demo despription={'This is a demo for state and props!'}/>  */}
            {/**Here we are passing description as a prop to Demo component */}

            {/* <ImageSlider /> */}

            <BetterImageSlider />

        </div>
    )
}

export default InterviewPrep;