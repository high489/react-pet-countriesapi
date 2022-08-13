import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchCountryByName } from '../store/reducers/countryByName/actionCreators';
import { fetchCountriesByCodes } from '../store/reducers/countriesByCodes/actionCreators';
import { MyButton } from '../components/UI';
import { IoArrowBack } from 'react-icons/io5';
import CountryDetails from '../components/Countries/CountryDetails';

const DetailsView = () => {
  const { name } = useParams();
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const {
    data: country,
    loading: isCountryLoading,
    error: countryLoadingError,
  } = useAppSelector(state => state.country)

  const {
    data: neighbours,
    loading: areNeighboursLoading,
    error: neighboursLoadingError
  } = useAppSelector(state => state.countriesByCodes)

  useEffect(() => {
    dispatch(fetchCountryByName(name))
  }, [dispatch, name])

  useEffect(() => {
    if(name === country.name) {
      dispatch(fetchCountriesByCodes(country.borders))
    }
  }, [dispatch, name, country])

  return (
    <>
      <MyButton onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </MyButton>
      {isCountryLoading
      ? <div>Country is loading...</div>
      : <CountryDetails
        {...country}
        neighbours={neighbours}
        areNeighboursLoading={areNeighboursLoading}
        neighboursLoadingError={neighboursLoadingError}
        navigate={navigate} />}
      {countryLoadingError && <div>Country loading error</div>}
    </>
  );
};

export default DetailsView;