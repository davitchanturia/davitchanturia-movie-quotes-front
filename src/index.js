import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

import './i18n/i18n';
import { AdminContextProvider } from './store/admin-context';

ReactDOM.render(
  <AdminContextProvider>
    <Suspense fallback={'.'}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Suspense>
  </AdminContextProvider>,
  document.getElementById('root')
);
