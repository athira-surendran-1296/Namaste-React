import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById('root'));

// React element using createElement in React
const headingElemet = React.createElement('h1', {className: 'red'}, 'Hello world');

// JSX = React Element
const heading = <h1 className="red">Hello world</h1>

// How can we render a JSX element 
// root.render(heading)

// How does the browser understant JSX
// JSX is transpiled by PARCEL with the help of BABEL to javascrit for the browser to understand

// JSX ====Parcel/Babel====> React element ----is nothing but----> JavaScript Object ====React====> HTML element

// React functional component 
// A normal JS function that returns nested react elements / JSX
// Starts with capital letter

const Title = () => <h1>I am Title</h1>

const Title2 = () => {
    return <h1>I am also Title</h1>
}

const Discription = () => {
    return (<p>I am the discription. I acn be placed in multiple 
        lines by having rounded brackets</p>)
}

// // We can also create functional component using function key word, but we prefer arror functions
function Name () {
    return <h5>I am Athira</h5>
}

// Component composition
const Content = () => {
    return <>
        <Title />
        <Title2 />
        <Discription />
        <Name />
        <p>Hello developers, lets learn react!!!</p>
        {'We can have javasript rendered within curly braces inside JSX'}
        <p>{123+5}</p>
        {console.log('hellooooooooooooooooo')}
        <Title></Title> {/** With closing tag */}
        {Title() /*As its a function its perfectly valid to render contents this way*/}
    </>
}

// How to render a React componenet?
// root.render(<Content />);

// Assignment
const Header = () => {
    const logoUrl = `https://www.reshot.com/preview-assets/icons/G7YJ8FXBKT/linkedin-G7YJ8FXBKT.svg`;
    const searchIconUrl = `https://www.reshot.com/preview-assets/icons/VE637FYRBG/search-engine-website-VE637FYRBG.svg`;
    
    return (
    <header className="header">
        {/* Logo */}
        <div className="logo">
            <img src={logoUrl} alt="Logo" />
        </div>
        {/* Search Bar */}
        <div className="search-bar">
            <input type="text" placeholder="Search..." />
        </div>
        {/* Search Icon */}
        <div className="user-icon">
            <img src={searchIconUrl} alt="Search Icon" />
        </div>
    </header>
    )
}

root.render(<Header />);

