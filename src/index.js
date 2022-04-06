import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import 'index.css';
import App from 'App';

import 'i18n/i18n';
import { AdminContextProvider } from 'store/adminContext';
import { DataContextProvider } from 'store/dataContext';
import { ModalContextProvider } from 'store/modalContext';

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
