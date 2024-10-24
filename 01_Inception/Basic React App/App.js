const heading = React.createElement(
    'h1', // name of the element to create
    {id: 'heading', xyz: 'abc'}, // attributes to attach to the element
    'Hello from react!!!' // children
);

// createElement return a Javascript object or a REACT ELEMENT
// console.log(heading);

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(heading); // the render function converts a react element to HTML element

/*
    <div id="parent">
        <div id="child1">
            <h1>I am h1 in child1 div</h1>
            <h2>I am h2 in child1 div</h2>
        </div>
        <div id="child2">
            <h1>I am h1 in child2 div</h1>
            <h2>I am h2 in child2 div</h2>
        </div>
    </div>
*/
// Below is the React code to implement nested html structure
/*
const parent = React.createElement('div', {id: 'parent'}, 
    [
        React.createElement('div', {id: 'child1'}, 
            [
                React.createElement('h1', {}, 'I am h1 in child1 div'),
                React.createElement('h2', {}, 'I am h2 in child1 div')
            ]
        ),
        React.createElement('div', {id: 'child2'}, 
            [
                React.createElement('h1', {}, 'I am h1 in child2 div'),
                React.createElement('h2', {}, 'I am h2 in child2 div')
            ]
        )
    ]
);
root.render(parent);
*/