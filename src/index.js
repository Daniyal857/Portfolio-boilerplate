import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/style.css'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import VisibilityToggle from './playground/visibilityToggle'


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


