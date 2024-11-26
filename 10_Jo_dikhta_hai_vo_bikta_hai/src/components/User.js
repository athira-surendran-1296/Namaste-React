import { useEffect, useState } from "react";

const User = ({name, location}) => {
    const [profileData, setProfileData] = useState({
        avatar_url: '',
        bio: ''
    });

    useEffect(() => {
        async function getProfileData() {
            const data = await (await fetch('https://api.github.com/users/athira-surendran-1296')).json();
            setProfileData(data);
        }

        getProfileData();
        
    },[]);

    const {bio, avatar_url} = profileData;
    return(
        <div className='user-card'>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <img src={avatar_url}/>
            <h3>{bio}</h3>
        </div>
    );
};

export default User;