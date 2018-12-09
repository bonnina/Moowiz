import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SPA from './components/App';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<SPA />, document.getElementById('root'));

serviceWorker.unregister();
