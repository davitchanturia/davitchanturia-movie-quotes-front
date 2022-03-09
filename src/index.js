import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

import './i18n/i18n';
import { AdminContextProvider } from './store/admin-context';
import { DataContextProvider } from './store/data-context';
import { ModalContextProvider } from './store/modal-context';
import axios from 'axios';

ReactDOM.render(
  <ModalContextProvider>
    <DataContextProvider>
      <AdminContextProvider>
        <Suspense fallback={'.'}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Suspense>
      </AdminContextProvider>
    </DataContextProvider>
  </ModalContextProvider>,
  document.getElementById('root')
);
