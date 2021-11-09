import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { QueryParamProvider } from 'use-query-params';

import './main.css';

ReactDOM.render(
  <React.StrictMode>
    <QueryParamProvider>
        <App />
    </QueryParamProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
