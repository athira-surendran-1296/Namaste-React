import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class AboutClass extends Component{
    constructor(props) {
        super(props);
        console.log('Parent constructor');
    }
    render () {
        console.log('Parent render');

        return (<div>
            <h1>About Class Parent</h1>
            <p>This is about page</p>
            <User name={'Athira S'} location={'Mangalore'}/>
            <UserClass  name={'Child 1'} location={'Bangalore'}/>
            <UserClass  name={'Child 2'} location={'Bangalore'}/>
            <MyUser  name={'Child 3'} location={'Bangalore'}/>
        </div>)
    }
    componentDidMount() {
        console.log("Parent componentDidMount");
    }
    componentDidUpdate() {
        console.log("Parent componentDidUpdate");
    }
}

class MyUser extends Component {
    constructor(props) {
        super(props)
        console.log('My user constructor');
    }
    render() {
        console.log('My user render');
        return(<div>
            My user {this.props.name}
            <MyUsersChild />
        </div>)
    }
    componentDidMount() {
        console.log('My user componentDidMount');
    }
    componentDidUpdate() {
        console.log('My user componentDidUpdate');
    }
}

class MyUsersChild extends Component {
    constructor(props) {
        super(props)
        console.log('My user\'s child constructor');
    }
    render() {
        console.log('My user\'s child render');
        return(<div>My user {this.props.name}</div>)
    }
    componentDidMount() {
        console.log('My user\'s child componentDidMount');
    }
    componentDidUpdate() {
        console.log('My user\'s child componentDidUpdate');
    }
}

export default AboutClass;