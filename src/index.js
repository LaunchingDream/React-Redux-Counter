import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import reducers from './reducers';
import App from './containers/App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducers);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
registerServiceWorker();
