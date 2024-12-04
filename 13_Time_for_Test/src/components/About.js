import UserContext from "../utils/userContext";
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

                <div>Using the user context using Context api</div>
                <UserContext.Consumer>
                    {({loggedInUser}) => <div className="font-bold">{loggedInUser}</div>}
                </UserContext.Consumer>

                <User name={'Athira S'} location={'Mangalore'}/>
                
            </div>
        )
    }
}

export default AboutClass;