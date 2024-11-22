import { useEffect, useState } from "react";

const User = ({name, location}) => {
    const [count1, setCount1] = useState(1);
    const [count2, setCount2] = useState(2);
    useEffect(() => {
        console.log('user functional component useeffect');

        const timer  = setInterval(() => {
            console.log('user fn comp hello');
        })

        return () => {
            clearInterval(timer);
        }
        
    },[]);
    return(
        <div className='user-card'>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h3>Count1: {count1}</h3>
            <h3>Count2: {count2}</h3>
            <button onClick={() => {
                    setCount1(count1+1)
                }
            }>Icrement count 1</button>
        </div>
    );
};

export default User;