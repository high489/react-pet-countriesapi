import React, { FC, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../hooks/redux';
import { selectFilteredCountries, selectControls } from '../store/selectors';
import { fetchAllCountries } from '../store/reducers/allCountries/action-creators';
import { setSearch, setRegion } from '../store/reducers/controls';

import { Controls } from '../components/Controls';
import { CountriesList } from '../components/Countries/CountriesList';
import { Loader } from '../components/UI/Loader';
import { CountryCard } from '../components/Countries/CountryCard';
import { ICountryInfo } from '../models';

const HomeView: FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const { search, region } = useAppSelector(selectControls)

  const [searchValue, setSearchValue] = useState<string>(search)
  const [regionValue, setRegionValue] = useState<unknown>(region)
  
  const {
    data: allCountries,
    loading: areAllCountriesLoading,
    error: allCountriesLoadingError,
  } = useAppSelector(state => selectFilteredCountries(state, {search, region}))

  useEffect(() => {
    dispatch(fetchAllCountries())
  }, [dispatch])

  useEffect(() => {
    dispatch(setSearch(searchValue))
  }, [dispatch, searchValue])

  useEffect(() => {
    dispatch(setRegion(regionValue))
  }, [dispatch, regionValue])

  useEffect(() => {  
    setSearchValue(search)
  }, [search])

  useEffect(() => {  
    setRegionValue(region)
  }, [region])

  return (
    <>
     <Controls 
      search={searchValue}
      region={regionValue}
      setSearch={setSearchValue}
      setRegion={setRegionValue}
    />
     <CountriesList>
      {areAllCountriesLoading 
      ? <Loader />
      : allCountries.map((c) => {
          const countryInfo: ICountryInfo = {
            img: c.flags.png,
            name: c.name.common,
            info: [
              {
                title: 'Population',
                description: c.population.toLocaleString(),
              },
              {
                title: 'Region',
                description: c.region,
              },
              {
                title: 'Capital',
                description: c.capital?.length !== 0 ? c.capital?.join(', ') : 'no capital',
              },
            ],
          }
          return (
            <CountryCard
              key={c.name.common}
              {...countryInfo}
              onClick={() => navigate(`/country/${c.name.common}`)}
            />
          )
        })}
      {allCountriesLoadingError && <div>Countries loading error</div>}
     </CountriesList>
    </>
  );
};

export default HomeView;