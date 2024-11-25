import React from 'react';

// This is a class based component

/** A class based component is a normal JS class that extands React component
 * with a render method that returns a piece of JSX.
*/

class UserClass extends React.Component {
    constructor(props) { 
        super(props);
        
        this.state = {
            userData: {
                name: 'Dymmy',
                bio: 'Dummy',
                avatar_url: ''
            }
        };
    }

    render() {

        const {name, bio, avatar_url } = this.state.userData;

        return(
            <div className='user-card'>
                <h2>Name: {name}</h2> 
                <h3>Bio: {bio}</h3>
                <img src={avatar_url} />
            </div>
        );
    }

    async componentDidMount() {
        const data = await fetch('https://api.github.com/users/athira-surendran-1296');
        const jsonData = await data.json();
        this.setState({
            userData: jsonData
        });
    }

    componentDidUpdate(prevProps, prevState) {
        
    }

    componentWillUnmount() {
        
    }
}

export default UserClass;