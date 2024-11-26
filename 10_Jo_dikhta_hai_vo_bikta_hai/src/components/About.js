import User from "./User";
import { Component } from "react";

class AboutClass extends Component{

    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div>
                <h1>About</h1>
                <User name={'Athira S'} location={'Mangalore'}/>
            </div>
        )
    }
}

export default AboutClass;