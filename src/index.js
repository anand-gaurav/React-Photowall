import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Components/Main';
import './styles/stylesheet.css'

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

// const element = React.createElement('h1', null, 'Hello  !');
//                                 //element, props, content
// ReactDOM.render(element, document.getElementById('root'));

//const tasks = ['Node.js', 'Express.js', 'Mongo', 'React'];
// const element = React.createElement('ol', null, 
//     tasks.map((task, index) => React.createElement('li', {key: index}, task)));
//Now with JSX approach
/*
const element =
    <div>
        <h1>Task Lists</h1>
        <ol>
            {tasks.map((task, index) => <li key={index}> {task} </li>)}
        </ol>
    </div>
*/




ReactDOM.render(<Main/>, document.getElementById('root'));
