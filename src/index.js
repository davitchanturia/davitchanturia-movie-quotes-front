import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

// import i18n (needs to be bundled ;))
import './i18n/i18n';

ReactDOM.render(
  <Suspense fallback={<div>Loading...</div>}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Suspense>,
  document.getElementById('root')
);
