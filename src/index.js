import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

import './i18n/i18n';
import { AdminContextProvider } from './store/admin-context';
import { DataContextProvider } from './store/data-context';

ReactDOM.render(
  <DataContextProvider>
    <AdminContextProvider>
      <Suspense fallback={'.'}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Suspense>
    </AdminContextProvider>
  </DataContextProvider>,
  document.getElementById('root')
);
