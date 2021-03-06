import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import './brotherhood.min.css';
import './index.css';

import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router><App /></Router>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();