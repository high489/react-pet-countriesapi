import React, { FC, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/redux';

import { fetchCountryByName } from '../store/reducers/countryDetails/action-creators';
import { selectCountryDetails } from '../store/selectors';
import { resetCountryDetailsState } from '../store/reducers/countryDetails';

import { MyButton } from '../components/UI';
import { IoArrowBack } from 'react-icons/io5';
import { Loader } from '../components/UI/Loader';
import { CountryDetails } from '../components/Countries/CountryDetails';

const DetailsView: FC = () => {
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
    
    return () => {
      dispatch(resetCountryDetailsState())
    }
  }, [dispatch, name])

  return (
    <>
      <MyButton onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </MyButton>
      {isCountryLoading
      ? <Loader />
      : <CountryDetails
        {...country}
        navigate={navigate} />}
      {countryError && <div>Country loading error</div>}
    </>
  );
};

export default DetailsView;