import React from 'react';

// This is a class based component

/** A class based component is a normal JS class that extands React component
 * with a render method that returns a piece of JSX.
 */

class UserClass extends React.Component {
    constructor(props) { // Recieving props
        super(props);
        console.log(this.props.name + " constructor");
        this.state = {
            count1: 1,
            count2: 2,
            userData: {
                name: 'Dymmy',
                bio: 'Dummy',
                avatar_url: ''
            }
        };
    }

    render() {
        console.log(this.props.name + " render");
        // returns a piece of JSX
        const {name, bio, avatar_url } = this.state.userData;
        return(
            <div className='user-card'>
                <h2>Name: {name}</h2> {/** Using the props */}
                <h3>Bio: {bio}</h3>
                <img src={avatar_url} />
                <h3>Count1: {this.state.count1}</h3>
                <h3>Count2: {this.state.count2}</h3>
                <button onClick={() => {
                    this.setState({
                        count1: this.state.count1 + 1
                    })
                }}>Increment Count 1</button>
            </div>
        );
    }

    async componentDidMount() {
        console.log(this.props.name + " componentDidMount");
        // After component is rendered, we make API call here
        const data = await fetch('https://api.github.com/users/athira-surendran-1296');
        const jsonData = await data.json();
        //console.log('data', jsonData);
        this.setState({
            userData: jsonData
        });
        this.timer = setInterval(() => {
            console.log('hello')
        }, 1000);
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.state.count1 !== prevState.count) {
            // Do something
        }
        console.log(this.props.name + " componentDidUpdate");
        console.log("prevProps", prevProps);
        console.log("prevState", prevState);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }
}

export default UserClass;