import React from 'react';
import ReactDOM from 'react-dom';
import Example from './components/Example.jsx';

// Main Entry point function
function App() {
	return <Example/>;
}

/**
 * TODO:
 * add routing configuration
 * add redux or any other state manager
 * check out any best practises
 */

// Rendering the entire react application
ReactDOM.render(<App/>, document.getElementById('root'));