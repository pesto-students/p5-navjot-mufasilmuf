import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.scss';
import App from './App';
import { ContextWrapper } from './context/GlobalContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextWrapper>
      <App />
    </ContextWrapper>
  </React.StrictMode>
);

