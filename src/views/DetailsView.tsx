import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchCountryByName } from '../store/reducers/countryDetails/action-creators';
import { MyButton } from '../components/UI';
import { IoArrowBack } from 'react-icons/io5';
import { CountryDetails } from '../components/Countries/CountryDetails';
import { selectCountryDetails } from '../store/selectors';

const DetailsView = () => {
  const { name } = useParams();
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const {
    country,
    isCountryLoading,
    countryError,
  } = useAppSelector(selectCountryDetails)

  useEffect(() => {
    dispatch(fetchCountryByName(name))
  }, [dispatch, name])

  return (
    <>
      <MyButton onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </MyButton>
      {isCountryLoading
      ? <div>Country is loading...</div>
      : <CountryDetails
        {...country}
        navigate={navigate} />}
      {countryError && <div>Country loading error</div>}
    </>
  );
};

export default DetailsView;