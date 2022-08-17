import React, { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../hooks/redux';
import { fetchAllCountries } from '../store/reducers/allCountries/action-creators';

import { Controls } from '../components/Controls';
import { CountriesList } from '../components/Countries/CountriesList';
import { CountryCard } from '../components/Countries/CountryCard';
import { ICountry, ICountryInfo } from '../models/countries';

interface HomeViewProps {
  allCountries: ICountry[];
  areAllCountriesLoading: boolean;
  allCountriesLoadingError: string | null;
}

const HomeView: FC<HomeViewProps> = ({
  allCountries,
  areAllCountriesLoading,
  allCountriesLoadingError,
}) => {
  const [filteredCountries, setFilteredCountries] = useState(allCountries)
  
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchAllCountries())
  }, [dispatch])

  useEffect(() => {
    setFilteredCountries(allCountries)
  }, [allCountries])

  const handleSearch = (search?: string, region?: any) => {
    let data = [...allCountries]

    const regionValue = region?.value || ''    
    
    if (regionValue) {
      data = data.filter(c => c.region.includes(regionValue))
    }
    if (search) {
      data = data.filter(c => c.name.toLowerCase().includes(search.toLowerCase()))
    }
    setFilteredCountries(data)
  }

  return (
    <>
     <Controls onSearch={handleSearch} />
     <CountriesList>
      {areAllCountriesLoading && <div>Countries are loading...</div>}
      {allCountriesLoadingError && <div>Countries loading error</div>}
      {filteredCountries.map((c) => {
          const countryInfo: ICountryInfo = {
            img: c.flags.png,
            name: c.name,
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
                description: c.capital,
              },
            ],
          }
          return (
            <CountryCard
              key={c.name}
              {...countryInfo}
              onClick={() => navigate(`/country/${c.name}`)}
            />
          )
        })}
     </CountriesList>
    </>
  );
};

export default HomeView;