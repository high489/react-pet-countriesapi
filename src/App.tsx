import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAppSelector } from './hooks/redux';

import Layout from './components/router/Layout';
import HomeView from './views/HomeView';
import DetailsView from './views/DetailsView';
import NotFound from './views/NotFound';

function App() {
  const {
    data: allCountries,
    loading: areAllCountriesLoading,
    error: allCountriesLoadingError,
  } = useAppSelector(state => state.allCountries)

  return (
    <>
      <Routes>
        <Route path='/' element={ <Layout /> }>
          <Route index element={
              <HomeView 
                allCountries={allCountries}
                areAllCountriesLoading={areAllCountriesLoading}
                allCountriesLoadingError={allCountriesLoadingError}
              /> 
            } 
          />
          <Route path='country/:name' element={ <DetailsView /> } />
          <Route path='*' element={ <NotFound /> } />
        </Route>        
      </Routes>
    </>
  );
}

export default App;
