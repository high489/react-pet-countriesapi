import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchAllCountries } from './store/reducers/allCountries/actionCreators';

import Layout from './components/router/Layout';
import HomeView from './views/HomeView';
import DetailsView from './views/DetailsView';
import NotFound from './views/NotFound';

function App() {
  const dispatch = useAppDispatch()
  
  const {
    data: countries,
    loading: areCountriesLoading,
    error: countriesLoadingError,
  } = useAppSelector(state => state.allCountries)

  useEffect(() => {
    dispatch(fetchAllCountries())
  }, [dispatch])

  return (
    <>
      <Routes>
        <Route path='/' element={ <Layout /> }>
          <Route index element={
              <HomeView 
                countries={countries}
                areCountriesLoading={areCountriesLoading}
                countriesLoadingError={countriesLoadingError}
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
