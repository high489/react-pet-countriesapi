import React, { useState, useEffect } from 'react';
import { useAppDispatch ,useAppSelector } from '../hooks/redux';
import { fetchAllCountries } from '../store/reducers/countriesListSlice/actionCreators';
import { fetchCountryByName } from '../store/reducers/countrySlice/actionCreators';

import { Controls } from '../components/Controls';

const HomeView = () => {
  const dispatch = useAppDispatch()
  const { data: country } = useAppSelector(state => state.country)

  useEffect(() => {
    dispatch(fetchCountryByName('Finland'))
  }, [dispatch])

  console.log(country)

  return (
    <>
     <Controls />
    </>
  );
};

export default HomeView;