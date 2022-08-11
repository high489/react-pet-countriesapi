import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchCountryByName } from '../store/reducers/countryByName/actionCreators';
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

  useEffect(() => {
    dispatch(fetchCountryByName(name))
  }, [dispatch, name])  

  return (
    <>
      <MyButton onClick={() => navigate('/')}>
        <IoArrowBack /> Back
      </MyButton>
      {isCountryLoading
      ? <div>Country is loading...</div>
      : <CountryDetails {...country} navigate={navigate} />}
      {countryLoadingError && <div>Country loading error</div>}
    </>
  );
};

export default DetailsView;