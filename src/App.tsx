import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/router/Layout';
import HomeView from './views/HomeView';
import NotFound from './views/NotFound';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={ <Layout /> }>
          <Route index element={ <HomeView /> } />
          <Route path='*' element={ <NotFound /> } />
        </Route>        
      </Routes>
    </>
  );
}

export default App;
