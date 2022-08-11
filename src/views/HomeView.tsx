import React, { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Controls } from '../components/Controls';
import { CountriesList } from '../components/Countries/CountriesList';
import { CountryCard } from '../components/Countries/CountryCard';
import { ICountry, ICountryInfo } from '../models/countries';

interface HomeViewProps {
  countries: ICountry[];
  areCountriesLoading: boolean;
  countriesLoadingError: string | null;
}

const HomeView: FC<HomeViewProps> = ({
  countries,
  areCountriesLoading,
  countriesLoadingError
}) => {
  const navigate = useNavigate()

  const [filteredCountries, setFilteredCountries] = useState(countries)

  useEffect(() => {
    setFilteredCountries(countries)
  }, [countries])

  const handleSearch = (search?: string, region?: any) => {
    let data = [...countries]

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
      {areCountriesLoading && <section>Countries are loading...</section>}
      {countriesLoadingError && <section>Countries loading error</section>}
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