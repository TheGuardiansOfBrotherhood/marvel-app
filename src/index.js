import React from 'react';
import ReactDOM from 'react-dom';
import './brotherhood.min.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Marvel from './Marvel';
import $ from 'jquery';


ReactDOM.render(<Marvel/>, document.getElementById('root'));
registerServiceWorker();
