import React, { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../hooks/redux';
import { selectAllCountries } from '../store/selectors';
import { fetchAllCountries } from '../store/reducers/allCountries/action-creators';

import { Controls } from '../components/Controls';
import { CountriesList } from '../components/Countries/CountriesList';
import { Loader } from '../components/UI/Loader';
import { CountryCard } from '../components/Countries/CountryCard';
import { ICountry, ICountryInfo } from '../models';

const HomeView: FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const {
    data: allCountries,
    loading: areAllCountriesLoading,
    error: allCountriesLoadingError,
  } = useAppSelector(selectAllCountries)  

  const [filteredCountries, setFilteredCountries] = useState([] as ICountry[])

  useEffect(() => {
    dispatch(fetchAllCountries())
  }, [dispatch])

  useEffect(() => {
    if (allCountries.length !== 0) {
      setFilteredCountries(allCountries)
    }    
  }, [allCountries])

  const handleSearch = (search?: string, region?: any) => {
    let data = [...allCountries]

    const regionValue = region?.value || ''    
    
    if (regionValue) {
      data = data.filter(c => c.region.includes(regionValue))
    }
    if (search) {
      data = data.filter(c => c.name.common.toLowerCase().includes(search.toLowerCase()))
    }
    setFilteredCountries(data)
  }

  return (
    <>
     <Controls onSearch={handleSearch} />
     <CountriesList>
      {areAllCountriesLoading 
      ? <Loader />
      : filteredCountries.map((c) => {
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