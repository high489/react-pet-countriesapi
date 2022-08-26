import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from './router/Layout';
import HomeView from './views/HomeView';
import DetailsView from './views/DetailsView';
import NotFound from './views/NotFound';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={ <Layout /> }>
          <Route index element={ <HomeView /> } />
          <Route path='country/:name' element={ <DetailsView /> } />
          <Route path='*' element={ <NotFound /> } />
        </Route>        
      </Routes>
    </>
  );
}

export default App;
