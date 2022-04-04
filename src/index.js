import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { Design } from './styles/Design';

ReactDOM.render(
  <React.StrictMode>
    <Design>
      <App />
    </Design>
  </React.StrictMode>,
  document.getElementById('root')
);