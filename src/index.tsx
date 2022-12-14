import React from 'react';
import './index.css'
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import { /* BrowserRouter, */ HashRouter } from 'react-router-dom';
import App from './App';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  //<React.StrictMode>
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter> 
  </Provider>
  //</React.StrictMode>
);